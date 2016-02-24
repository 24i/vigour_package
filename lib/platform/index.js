'use strict'

var isNode = require('vigour-util/is/node')

if (isNode) {
	module.exports = require('./node')
} else {
	module.exports = require('./browser')
}