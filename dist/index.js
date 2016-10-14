'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.get = get;
exports.isEmpty = isEmpty;

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _immutable = require('immutable');

var _immutable2 = _interopRequireDefault(_immutable);

var _immutableLodash = require('./../lib/immutable-lodash');

var _immutableLodash2 = _interopRequireDefault(_immutableLodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function get(objectOrImmutable, path, defaultValue) {
    if (objectOrImmutable instanceof _immutable2.default.Collection) {
        return objectOrImmutable.getIn(_lodash2.default.split(path, '.')) || defaultValue;
    }
    return _lodash2.default.get(objectOrImmutable, path, defaultValue);
}

function isEmpty(objectOrImmutable) {
    if (objectOrImmutable instanceof _immutable2.default.Collection) {
        return objectOrImmutable.isEmpty();
    }
    return _lodash2.default.isEmpty(objectOrImmutable);
}

var _ = {};
_.get = get;
_.isEmpty = isEmpty;

exports.default = _;