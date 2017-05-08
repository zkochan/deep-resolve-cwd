'use strict'
const deepResolveFrom = require('deep-resolve-from')

module.exports = moduleIds => deepResolveFrom(process.cwd(), moduleIds)
module.exports.silent = moduleIds => deepResolveFrom.silent(process.cwd(), moduleIds)
