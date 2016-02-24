'use strict'

Error.stackTraceLimit = 100

var pathHandler = require('path')

var pathTest = /\((\/.*?):.*\)/
var stack = new Error().stack.split('\n')

module.exports = findPackage(stack)

function findPackage (stack) {
  var path
  for (var i = stack.length - 1; i !== -1; i--) {
    var found = stack[i].match(pathTest)
    if (found) {
      found = found[1]
      path = pathHandler.resolve(found, '../package.json')
      break
    }    
  }
  console.log('---------------------')
  var pkg
  while (path !== '/' && !pkg) {
    try {
      pkg = require(path)
    } catch (err) {
      path = pathHandler.resolve(path, '../../package.json')
    }
  }
  return pkg
}
