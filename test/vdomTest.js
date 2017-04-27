
import { VirtualNode, createVirtualNode, createTextVirtualNode, clonedVirtualNode, clonedVirtualNodes } from '../src/vdom/vdom.js';
import jsdom  from "mocha-jsdom";
import expect from 'expect';

/** @jsx createVirtualNode */
describe('Test VDOM', () => {
    jsdom();

    describe('Check Virtual Text Node', () => {
        it('test function check createTextVirtualNode', () => {
            const param = 'testNode';
            const vnode = new VirtualNode();
            vnode.text = param;

            expect(createTextVirtualNode(param)).toEqual(vnode);
        });
    });

    describe('Check Virtual Empty node', () => {
        it('test function check createTextVirtualNode if empty node', () => {
            const vnode = new VirtualNode();

            expect(createTextVirtualNode()).toEqual(vnode);
        });
    });
});
