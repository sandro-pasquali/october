'use strict';

let october = require('../../october.js');
let _ = require('lodash');

module.exports = (test, Promise) => {

    return october.data()
    .then(data => {
        test.equal(_.isString(data), true, 'Fetching #data');
        return october.images();
    })
    .then(images => {
        return test.equal(_.isArray(images), true, 'Fetching #images');
    })
    .catch(err => test.fail(err))
};


