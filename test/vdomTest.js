
import { VirtualNode, createVirtualNode, createTextVirtualNode, clonedVirtualNode, clonedVirtualNodes } from '../src/vdom/vdom.js';
import jsdom  from "mocha-jsdom";
import expect from 'expect';

/** @jsx createVirtualNode */
describe('Test VDOM', () => {
    jsdom();

    describe('Check Virtual Text Node', () => {
        it('test function check createTextVirtualNode', () => {
            const param = 'testNode';
            VirtualNode();
            vnode.text = param;

            expect(createTextVirtualNode(param)).toEqual(vnode);
        });
    });
});
