jest.autoMockOff();

import _ from './../src';
import Immutable from 'immutable';

describe('Test for Get', () => {
    describe('Test got result: Plain JS objects', () => {
        const obj = {'a': 1, 'b': {c: function(){return 3;}}};
        it('Return property value successfully', () => {
            expect(_.result(obj, 'a')).toBe(1);
        });
        it('Return undefined when property is not found', () => {
            expect(_.result(obj, 'c')).toBeUndefined();
        });
        it('Return object when property value is object', () => {
            expect(_.result(obj, 'b')).toEqual(obj['b']);
        });
        it('Return single value when property is passed as path', () => {
            expect(_.result(obj, 'b.c')).toBe(3);
        });
        it('return default value when path is not defined', () => {
            expect(_.result(obj, 'b.c.d', 4)).toBe(4);
        });
        it('return undefined value when object is undefined', () => {
            expect(_.result(undefined, 'b.c.d', 4)).toBe(4);
        });
    });
    describe('Test got result: Immutable Map objects', () => {
        const obj = Immutable.fromJS({'a': 1, 'b': {c: function(){return 3;}}});
        it('Return property value successfully', () => {
            expect(_.result(obj, 'a')).toBe(1);
        });
        it('Return undefined when property is not found', () => {
            expect(_.result(obj, 'c')).toBeUndefined();
        });
        it('Return object when property value is object', () => {
            expect(_.result(obj, 'b')).toEqual(obj.getIn(['b']));
        });
        it('Return single value when property is passed as path', () => {
            expect(_.result(obj, 'b.c')).toBe(3);
        });
        it('return default value when path is not defined', () => {
            expect(_.result(obj, 'b.c.d', 4)).toBe(4);
        });
        it('return undefined value when object is undefined', () => {
            expect(_.result(undefined, 'b.c.d', 4)).toBe(4);
        });
    });
});