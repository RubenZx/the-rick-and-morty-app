const commitlint = require('@commitlint/config-conventional')

commitlint.rules['type-enum'][2].push('tmp')

module.exports = {
  ...commitlint,
}
