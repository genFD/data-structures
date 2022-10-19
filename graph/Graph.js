const Edge = require("./Edge.js");
const Vertex = require("./Vertex.js");

class Graph {
  constructor() {
    this.vertices = [];
  }
  print() {
    const vertexList = this.vertices || [];
    vertexList.forEach((vertex) => vertex.print());
  }
}

module.exports = Graph;
