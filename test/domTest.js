import { createElementFromVDOM } from '../src/dom.js'
import jsdom  from "mocha-jsdom";
import expect from 'expect';


describe('Test DOM', () => {
    jsdom();

    describe('TestCreateElementWithStringParam', () => {
        it('test function createElementFromVDOM with string param', () => {
            const param = 'testNode';
            const nodeTest = document.createTextNode(param);

            expect(createElementFromVDOM(param)).toEqual(nodeTest);
        });
    });
});
