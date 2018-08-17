import _ from "lodash";
import * as dSet from "./disjoint";

/**
 * MST - Calculate the minimum spanning tree for the given edges/weights
 * @param {Edge[]} edges - The list of edges
 * @returns {Edge[]} - The edges part of the tree
 */
export default function mst(edges) {
    const nodes = _.uniq(_.flatMap(edges, edge => [edge.a, edge.b]));

    const set = dSet.makeSet(nodes);
    const dictionary = _.keyBy(set, e => e.data.id);

    const sortedEdges = _.sortBy(edges, "weight");
    const finalEdges = [];

    let remainingConnections = nodes.length - 1;
    _.forEach(sortedEdges, edge => {
        if (dSet.union(dictionary[edge.a.id], dictionary[edge.b.id])) {
            finalEdges.push(edge);
            remainingConnections--;
        }

        if (remainingConnections === 0) return false;
    });

    return finalEdges;
}
