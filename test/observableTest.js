import { getObservers, hasObservers, addObservers, Observable } from '../src/observable/observable.js';
import expect from 'expect';

describe('Test Observable', () => {
    const correctObservable = {
        observers: []
    };
    const fullObservable = {
        observers: [1, 2, 3]
    };

    const observable = {
        observers: [1, 2, 3, 4]
    };

    const uncorrectObservable = {};
    describe('Check getObservers', () => {
        it('test function check getObservers', () => {

            expect(getObservers(correctObservable)).toEqual(correctObservable.observers);
            expect(getObservers(uncorrectObservable)).toEqual(undefined);

        });
    });

    describe('Check hasObservers', () => {
        it('test function check hasObservers', () => {

            expect(hasObservers(fullObservable)).toEqual(true);
            expect(hasObservers(correctObservable)).toEqual(false);
            expect(hasObservers(uncorrectObservable)).toEqual(undefined);
        });
    });

    describe('Check addObservers', () => {
        it('test function check addObservers', () => {
            const expectedObservers = [1,2,3,4];

            expect(addObservers(fullObservable, 4).observers).toEqual(expectedObservers);
            expect(hasObservers(addObservers(correctObservable, 4))).toEqual(true);
            expect(addObservers(observable, 4).observers).toNotEqual(expectedObservers);

        });
    });
});
