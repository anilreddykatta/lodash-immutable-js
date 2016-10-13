jest.autoMockOff();

import _ from './../src';
import Immutable from 'immutable';

describe('Sample __tests__', () => {
    it('Initial Test case', () => {
        expect(1).toBeTruthy();
    });
});

describe('Test for isEmpty', () => {
    describe('Test got isEmpty: Plain JS objects', () => {
        const obj = {'a': 1, 'b': {c: 3}};
        it('Return property value successfully', () => {
            expect(_.isEmpty(obj)).toBeFalsy();
        });
        it('Return true when object is undefined', () => {
            expect(_.isEmpty(undefined)).toBeTruthy();
        });
        it('Return true when object is empty', () => {
            expect(_.isEmpty({})).toBeTruthy();
        });
        it('Return true when array is empty', () => {
            expect(_.isEmpty([])).toBeTruthy();
        });
        it('Return false when array have values', () => {
            expect(_.isEmpty([1, 2, 3])).toBeFalsy();
        });
    });
    describe('Test got isEmpty: Immutable Map objects', () => {
        const obj = Immutable.fromJS({'a': 1, 'b': {c: 3}});
        it('Return property value successfully', () => {
            expect(_.isEmpty(obj)).toBeFalsy();
        });
        it('Return true when Immutable is empty', () => {
            expect(_.isEmpty(Immutable.Map())).toBeTruthy();
        });
        it('Return true when Immutable list is empty', () => {
            expect(_.isEmpty(Immutable.List())).toBeTruthy();
        });
        it('Return false when Immutable list have values', () => {
            expect(_.isEmpty(Immutable.List([1, 2, 3]))).toBeFalsy();
        });
    });
});