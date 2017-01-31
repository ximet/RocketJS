import { setProperty, removeProperty, setPropertys, updateProperty, updatePropertys, setBooleanProperty, removeBooleanProperty} from './propertyService.js'
import { createElement, updateElement } from './addEditElementService.js'
/** @jsx createVirtualNode */
function createVirtualNode(type, props, ...children) {
    return { type, props: props || {}, children };
}
//TODO change structure code



function isChanged(node1, node2) {
    return typeof node1 !== typeof node2
        || typeof node1 === 'string' && node1 !== node2
        || node1.type !== node2.type
        || node1.props && node1.props.forceUpdate;
}

function isCustomProperty (name) {
   return isEventProps(name) || name === 'forceUpdate';
}

function isEventProps (name) {
    return /^on/.test(name);
}

function extractEventName (name) {
    return name.slice(2).toLowerCase();
}

function addEventListeners(target, props) {
    Object.keys(props).forEach(name => {
        if (isEventProps(name)) {
            target.addEventListener(extractEventName(name), props[name]);
        }
    });
}

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
