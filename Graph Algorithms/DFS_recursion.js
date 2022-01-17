
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
for(let each of graph1.nodes){
  console.log('parent node = ', each.value, end='\nchildren\n');
  for(let e of each.children){
    console.log(e.value, end=' ');
  }
  console.log('\n');
}
function dfs_recursion_start(start_node, search_value){
  let visited = new Set();
  return dfs_recursion(start_node, visited, search_value);
}
function dfs_recursion(node, visited, search_value){
  let found = false;
  let result = null;
  if(node.value == search_value){
    found = true;
    return node;
  }
  visited.add(node);
  for(let child of node.children){
    if(!visited.has(child)){
      result = dfs_recursion(child, visited, search_value);
      if(found){
        break;
      }
    }
  }
  return result;
}
assert(nodeA == dfs_recursion_start(nodeG, 'A'));
assert(nodeA == dfs_recursion_start(nodeS, 'A'));
assert(nodeS == dfs_recursion_start(nodeP, 'S'));
assert(nodeR == dfs_recursion_start(nodeH, 'R'));
