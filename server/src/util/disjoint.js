import _ from "lodash";

/**
 * @typedef {Object} Tree
 * @property {*} data - The value associated with the leaf
 * @property {Tree} parent - The parent leaf in the associated set
 * @property {Number} size - Internally used for optimization
 */

/**
 * Create a Disjoint-Set from 'elements'
 * @param {*[]} elements
 * @returns {Tree[]}
 */
export function makeSet(elements) {
    return _.map(elements, el => {
        const tree = {
            data: el,
            size: 1
        };

        tree.parent = tree;

        return tree;
    });
}

/**
 * Find the root leaf in a tree
 * @param {Tree} tree
 * @returns {Tree}
 */
export function find(tree) {
    if (tree.parent !== tree) tree.parent = find(tree.parent);
    return tree.parent;
}

/**
 * Combine two trees in a set
 * @param {Tree} xs
 * @param {Tree} ys
 * @returns {Boolean} - Whether or not a merge was performed
 */
export function union(xs, ys) {
    const xRoot = find(xs);
    const yRoot = find(ys);

    // If xs and ys are already in the same set, don't do anything
    if (xRoot === yRoot) return false;

    if (xRoot.size < yRoot.size) {
        // Merge xRoot into yRoot
        xRoot.parent = yRoot;
        yRoot.size += xRoot.size;
    } else {
        // Merge yRoot into xRoot
        yRoot.parent = xRoot;
        xRoot.size += yRoot.size;
    }

    return true;
}
