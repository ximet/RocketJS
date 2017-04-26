/** @jsx createVirtualNode */
export function createVirtualNode(type, props, ...children) {
    return { type, props: props || {}, children };
}

export default class VirtualNode {
    constructor(tag, props, data, children, text, options) {
        this.tag = tag;
        this.props = props;
        this.data = data;
        this.children = children;
        this.text = text;
        this.options = options;
    }
}


export function createTextVNode (value) {
    return new VirtualNode(undefined, undefined, undefined, undefined, String(value))
}
