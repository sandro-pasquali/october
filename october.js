'use strict';

let october = require('wikijs').default().page('october');

module.exports = {
	data : () => october.then(page => page.content()),
	images : () => october.then(page => page.images())
};