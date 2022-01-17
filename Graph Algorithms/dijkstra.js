
let assert = require('assert');
class GraphEdge{
  constructor(destinationNode, distance){
    this.node = destinationNode;
    this.distance = distance;
  }
}
class GraphNode{
  constructor(value){
    this.value = value;
    this.edges = [];
  }
  add_child(new_node, distance){
    this.edges.push(new GraphEdge(new_node, distance));
  }
  remove_child(del_node){
    if(this.edges.includes(del_node)){
      this.edges.filter((item)=>{if (item!=del_node){return item;} });
    }
  }
}
class Graph{
  constructor(node_list){
    this.nodes = node_list;
  }
  add_edge(node1, node2, distance){
    if(this.nodes.includes(node1) && this.nodes.includes(node2)){
      node1.add_child(node2, distance);
      node2.add_child(node1, distance);
    }
  }
  remove_edge(node1, node2){
    if(this.nodes.includes(node1) && this.nodes.includes(node2)){
      node1.remove_child(node2);
      node2.remove_child(node1);
    }
  }
}

function dijkstra(graph, start_node, end_node){
  let distance_dict = {};
  for (let node of graph.nodes){
    distance_dict[node.value] = Infinity;
  }
  let shortest_distance = {};
  distance_dict[start_node.value] = 0;
  while (!(Object.keys(distance_dict).length === 0)){
    // Sort the distance_dict, and pick the key:value having smallest distance
    //let current_node, node_distance = sorted(distance_dict.items(), key=lambda x: x[1])[0]
    let items = Object.keys(distance_dict).map( function (key) {return [key, distance_dict[key]];} );
    //console.log('ITEMS: ', items);
    items.sort(function (first, second){
      return second[0] - first[0];
    });
    let smallest_item = items[0];
    let [current_node, node_distance] = smallest_item;
    // Remove the current node from the distance_dict, and store the same key:value in shortest_distance
    shortest_distance[current_node] = distance_dict[current_node];
    delete distance_dict[current_node];

    // Check for each neighbour of current_node, if the distance_to_neighbour is smaller than the alreday stored distance, update the distance_dict
    //get CNedges
    let CNedges;
    for (let n of graph.nodes){
      if(n.value == current_node){
        CNedges = n.edges;
      }
    }
    for (let edge of CNedges){
      if(Object.keys(distance_dict).includes(edge.node.value)){
        let distance_to_neighbour = node_distance + edge.distance;
        if (distance_dict[edge.node.value] > distance_to_neighbour){
          distance_dict[edge.node.value] = distance_to_neighbour;
        }
      }
    }
  }
  return shortest_distance[end_node.value];
}

// Test case 1
let node_u = new GraphNode('U');
let node_d = new GraphNode('D');
let node_a = new GraphNode('A');
let node_c = new GraphNode('C');
let node_i = new GraphNode('I');
let node_t = new GraphNode('T');
let node_y = new GraphNode('Y');

let graph1 = new Graph([node_u, node_d, node_a, node_c, node_i, node_t, node_y]);

graph1.add_edge(node_u, node_a, 4);
graph1.add_edge(node_u, node_c, 6);
graph1.add_edge(node_u, node_d, 3);
graph1.add_edge(node_d, node_c, 4);
graph1.add_edge(node_a, node_i, 7);
graph1.add_edge(node_c, node_i, 4);
graph1.add_edge(node_c, node_t, 5);
graph1.add_edge(node_i, node_y, 4);
graph1.add_edge(node_t, node_y, 5);

console.log(`Shortest Distance from %s to %s is %s`, node_u.value, node_y.value, dijkstra(graph1, node_u, node_y));

// Test case 2
let node_A = new GraphNode('A');
let node_B = new GraphNode('B');
let node_C = new GraphNode('C');

let graph2 = new Graph([node_A, node_B, node_C]);

graph2.add_edge(node_A, node_B, 5);
graph2.add_edge(node_B, node_C, 5);
graph2.add_edge(node_A, node_C, 10);

// Shortest Distance from A to C is 10
console.log('Shortest Distance from %s to %s is %s', node_A.value, node_C.value, dijkstra(graph2, node_A, node_C));

// Test case 3
node_A = new GraphNode('A');
node_B = new GraphNode('B');
node_C = new GraphNode('C');
let node_D = new GraphNode('D');
let node_E = new GraphNode('E');

let graph3 = new Graph([node_A, node_B, node_C, node_D, node_E]);

graph3.add_edge(node_A, node_B, 3);
graph3.add_edge(node_A, node_D, 2);
graph3.add_edge(node_B, node_D, 4);
graph3.add_edge(node_B, node_E, 6);
graph3.add_edge(node_B, node_C, 1);
graph3.add_edge(node_C, node_E, 2);
graph3.add_edge(node_E, node_D, 1);

// Shortest Distance from A to C is 4
console.log('Shortest Distance from %s to %s is %s', node_A.value, node_C.value, dijkstra(graph3, node_A, node_C));
