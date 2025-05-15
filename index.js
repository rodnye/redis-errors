'use strict'

let Errors;

/**
 * Support Next.js 13+ in Edge Runtime
 * @see https://github.com/vercel/next.js/issues/73424
 * @see https://nextjs.org/docs/app/api-reference/edge
 */ 
if (!process.env.NEXT_RUNTIME) {
  Errors = process.version.charCodeAt(1) < 55 && process.version.charCodeAt(2) === 46
    ? require('./lib/old') // Node.js < 7
    : require('./lib/modern')
}
else {
  Errors = require('./lib/modern')
}

module.exports = Errors
