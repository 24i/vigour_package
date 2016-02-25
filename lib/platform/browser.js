'use strict'

module.exports = findPackage()

function findPackage () {
  if (typeof global.VIGOUR_CONFIG !== 'undefined') {
    return global.VIGOUR_CONFIG
  } else {
    try {
      let pkg = require('package.json')
      return pkg
    } catch (err) {
      console.error('[vigour-package] failed to find your package')
    }
  }
}
