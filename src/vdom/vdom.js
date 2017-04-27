/** @jsx createVirtualNode */
export function createVirtualNode(type, props, ...children) {
    return { type, props: props || {}, children };
}

export class VirtualNode {
    constructor(tag, props, children, text, isCloned) {
        this.tag = tag;
        this.props = props;
        this.children = children;
        this.text = text;
        this.isCloned = isCloned;
    }
}

export function createEmptyVirtualNode () {
    return new VirtualNode()
}

export function createTextVirtualNode (value) {
    if (value === void(0)) {
        return createEmptyVirtualNode();
    }
    return new VirtualNode(undefined, undefined, undefined, String(value))
}

export function clonedVirtualNode(node) {
    return new VirtualNode(node.tag, node.props, node.children, node.text, true)
}

export function clonedVirtualNodes(nodes) {
    const length = nodes.length;
    const resultCloneArray = new Array(length);

    for (let i = 0; i < length; i++) {
        resultCloneArray[i] = clonedVirtualNode(nodes[i])
    }

    return resultCloneArray;
}
