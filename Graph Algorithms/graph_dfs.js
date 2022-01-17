
let assert = require('assert');
class GraphNode{
  constructor(value){
    this.value = value;
    this.children = [];
  }
  add_child(new_node){
    this.children.push(new_node);
  }
  remove_child(del_node){
    if(this.children.includes(del_node)){
      this.children.filter((item)=>{if (item!=del_node){return item;} });
    }
  }
}
class Graph{
  constructor(node_list){
    this.nodes = node_list;
  }
  add_edge(node1, node2){
    if(this.nodes.includes(node1) && this.nodes.includes(node2)){
      node1.add_child(node2);
      node2.add_child(node1);
    }
  }
  remove_edge(node1, node2){
    if(this.nodes.includes(node1) && this.nodes.includes(node2)){
      node1.remove_child(node2);
      node2.remove_child(node1);
    }
  }
}
// Create Graph
let nodeG = new GraphNode('G');
let nodeR = new GraphNode('R');
let nodeA = new GraphNode('A');
let nodeP = new GraphNode('P');
let nodeH = new GraphNode('H');
let nodeS = new GraphNode('S');
let graph1 = new Graph([nodeS, nodeH, nodeG, nodeP, nodeR, nodeA]);
graph1.add_edge(nodeG, nodeR);
graph1.add_edge(nodeA, nodeR);
graph1.add_edge(nodeA, nodeG);
graph1.add_edge(nodeR, nodeP);
graph1.add_edge(nodeH, nodeG);
graph1.add_edge(nodeH, nodeP);
graph1.add_edge(nodeS, nodeR);
function dfs_search(root_node, search_value){
  let visited = new Set();
  let stack = [root_node];
  while(stack.length > 0){
    let curr_node = stack.pop();
    visited.add(curr_node);
    if(curr_node.value == search_value){
      return curr_node;
    }
    for(let child of curr_node.children){
      if( (!(visited.has(child))) && (!stack.includes(child)) ){
        stack.push(child);
      }
    }
  }
}
console.log(dfs_search(nodeS, 'A'), nodeA);
console.log(dfs_search(nodeP, 'S'), nodeS);
console.log(dfs_search(nodeH, 'R'), nodeR);
assert(nodeA == dfs_search(nodeS, 'A'));
assert(nodeS == dfs_search(nodeP, 'S'));
assert(nodeR == dfs_search(nodeH, 'R'));
