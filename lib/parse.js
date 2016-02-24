'use strict'

module.exports = function parse (pkg) {
	if (pkg.vigour) {
    pkg = pkg.vigour
  }
  // do branch stuff here, branch info needs to be provided by webpack
  return pkg
}
