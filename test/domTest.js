import { createVirtualNode, createElementFromVDOM } from '../src/vdom/vdom.js';
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

            expect(createElementFromVDOM(param)).toEqual(nodeTest);
        });
    });

    describe('TestCreateElementWithTreeDiv', () => {
        it('test function createElementFromVDOM with tree div', () => {
            const param = (<div><div></div></div>);
            const nodeDiv = document.createElement('div');
            const nodeTest = document.createElement('div').appendChild(nodeDiv);

            expect(createElementFromVDOM(param)).toEqual(nodeTest);
        });
    });
});
