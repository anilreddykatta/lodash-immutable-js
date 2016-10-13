jest.autoMockOff();

import _ from './../src';
import Immutable from 'immutable';

describe('Sample __tests__', () => {
    it('Initial Test case', () => {
       expect(1).toBeTruthy();
    });
});

describe('Test for Get', () => {
    describe('Test got Get: Plain JS objects', () => {
        const obj = {'a': 1, 'b': {c: 3}};
        it('Return property value successfully', () => {
            expect(_.get(obj, 'a')).toBe(1);
        });
        it('Return undefined when property is not found', () => {
            expect(_.get(obj, 'c')).toBeUndefined();
        });
        it('Return object when property value is object', () => {
            expect(_.get(obj, 'b')).toEqual(obj['b']);
        });
        it('Return single value when property is passed as path', () => {
            expect(_.get(obj, 'b.c')).toBe(3);
        });
        it('return default value when path is not defined', () => {
            expect(_.get(obj, 'b.c.d', 4)).toBe(4);
        });
        it('return undefined value when object is undefined', () => {
            expect(_.get(undefined, 'b.c.d', 4)).toBe(4);
        });
    });
    describe('Test got Get: Immutable Map objects', () => {
        const obj = Immutable.fromJS({'a': 1, 'b': {c: 3}});
        it('Return property value successfully', () => {
            expect(_.get(obj, 'a')).toBe(1);
        });
        it('Return undefined when property is not found', () => {
            expect(_.get(obj, 'c')).toBeUndefined();
        });
        it('Return object when property value is object', () => {
            expect(_.get(obj, 'b')).toEqual(obj.getIn(['b']));
        });
        it('Return single value when property is passed as path', () => {
            expect(_.get(obj, 'b.c')).toBe(3);
        });
        it('return default value when path is not defined', () => {
            expect(_.get(obj, 'b.c.d', 4)).toBe(4);
        });
        it('return undefined value when object is undefined', () => {
            expect(_.get(undefined, 'b.c.d', 4)).toBe(4);
        });
    });
});