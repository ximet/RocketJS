import { createElement, updateElement } from '../src/addEditElementService.js';
import { createVirtualNode } from '../src/vdom.js';

/** @jsx createVirtualNode */


const dom1 = (
    <ul style="list-style: none;">
        <li className="item">item 1</li>
        <li className="item">
            <input type="checkbox" checked={true} />
            <input type="text" disabled={false} />
        </li>
    </ul>
);

const dom2 = (
    <ul style="list-style: none;">
        <li className="item item2">item 1</li>
        <li style="background: grey;">
            <input type="checkbox" checked={false} />
            <input type="text" disabled={true} />
        </li>
    </ul>
);
const $root = document.getElementById('root');
//$root.appendChild(createElement(dom1));
const $button = document.getElementById('button');

updateElement($root, dom1);

$button.addEventListener('click', () => {
    updateElement($root, dom2, dom1);
});
