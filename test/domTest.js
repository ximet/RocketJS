import { createElementFromVDOM } from '../src/dom.js';
import { createVirtualNode } from '../src/vdom.js';
import jsdom  from "mocha-jsdom";
import expect from 'expect';

/** @jsx createVirtualNode */
describe('Test DOM', () => {
    jsdom();

    describe('TestCreateElementWithStringParam', () => {
        it('test function createElementFromVDOM with string param', () => {
            const param = 'testNode';
            const nodeTest = document.createTextNode(param);

            expect(createElementFromVDOM(param)).toEqual(nodeTest);
        });
    });

    describe('TestCreateElementWithEmptyDiv', () => {
        it('test function createElementFromVDOM with empty div', () => {
            const param = (<div></div>);
            const nodeTest = document.createElement('div');
            const resultFunc = createElementFromVDOM(param);

            expect(createElementFromVDOM(param)).toEqual(nodeTest);
        });
    });
});
