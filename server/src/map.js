import _ from "lodash";
import triangulate from "delaunay-triangulate";

import mst from "./util/mst";
import {Edge} from "./util/graph";

/**
 * Create a minimal graph from given nodes
 * @param {Node[]} nodes
 * @returns {Edge[]}
 */
export function createGraph(nodes) {
    const points = _.map(nodes, node => [node.x, node.y]);
    const triangles = triangulate(points);
    const edges = _.map(_.flatMap(triangles, triangle => {
        return [
            [triangle[0], triangle[1]],
            [triangle[1], triangle[2]],
            [triangle[2], triangle[0]]
        ];
    }), edge => new Edge(nodes[edge[0]], nodes[edge[1]]));

    return mst(edges);
}
