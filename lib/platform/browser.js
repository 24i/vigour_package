'use strict'

module.exports = function findPackage () {
  if (typeof global.VIGOUR_CONFIG !== 'undefined') {
    return global.VIGOUR_CONFIG
  } else {
    let pkg = require('package.json')
    return pkg
  }
}
