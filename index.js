'use strict';

var parseQuery = require('loader-utils').parseQuery;

module.exports = function passthoughLoader(source) {

  const config = getConfig(this.options, this.query);

  if (config.callback && typeof config.callback === 'function') {

		config.callback(source, this);

	} else {

		throwError('No callback is defined');

	}

};

function getConfig(options, query) {
	return options.passthoughLoader ||
		options.passthough ||
		options[query.config];
}

function throwError(message) {

  var err = new Error('passthough-loader\n' + message);

  Error.captureStackTrace(err, module.exports);

  throw err;

}
