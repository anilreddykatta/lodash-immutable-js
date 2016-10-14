import lodash from 'lodash';
import Immutable from 'immutable';
import immutableLodash from './../lib/immutable-lodash';

export function get(objectOrImmutable, path, defaultValue) {
    if (objectOrImmutable instanceof Immutable.Collection) {
        return objectOrImmutable.getIn(lodash.split(path, '.')) || defaultValue;
    }
    return lodash.get(objectOrImmutable, path, defaultValue);
}

export function isEmpty(objectOrImmutable) {
    if (objectOrImmutable instanceof Immutable.Collection) {
        return objectOrImmutable.isEmpty();
    }
    return lodash.isEmpty(objectOrImmutable);
}

export function result(object, path, defaultValue) {
    const property = get(object, path, defaultValue);
    return (property instanceof Function) ? property() : property;
}


const _ = {};
_.get = get;
_.isEmpty = isEmpty;
_.result = result;

export default _;