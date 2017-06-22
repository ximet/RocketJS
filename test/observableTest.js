import { getObservers, hasObservers, addObservers, Observable } from '../src/observable/observable.js';
import expect from 'expect';

describe('Test Observable', () => {

    describe('Check getObservers', () => {
        it('test function check getObservers', () => {
            const correctObservable = {
                observers: []
            };
            const uncorrectObservable = {};

            expect(getObservers(correctObservable)).toEqual(correctObservable.observers);
            expect(getObservers(uncorrectObservable)).toEqual(undefined);

        });
    });


});
