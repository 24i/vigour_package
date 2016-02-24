'use strict'

module.exports = findPackage()

function findPackage () {
  if (typeof global.VIGOUR_CONFIG !== 'undefined') {
    return global.VIGOUR_CONFIG
  } else {
    let pkg = require('package.json')
    return pkg
  }
}
