import {Node} from "./util/graph";
import {createGraph} from "./map";

import config from "../config";

// const node1 = new Node(3, 45);
// const node2 = new Node(71, 23);
// const node3 = new Node(12, 8);

const nodes = [];
for (let i = 0; i < 50; i++) {
    nodes.push(new Node(Math.random()*50|0, Math.random()*50|0))
}

const edges = createGraph(nodes);
console.log(edges);

import express from "express";

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.listen(config.port, () => {
    console.log("Running on port " + config.port);
});