class Graph{
  constructor(){
    this.nodes = new Set();
    this.neighbors = {};
    this.distances = {};
  }
  add_node(value){
    this.nodes.add(value);
  }
  add_edge(from_node, to_node, distance){
    if(this.neighbors[from_node]){
      this.neighbors[from_node].push(to_node);
    }
    else{
      this.neighbors[from_node] = [to_node];
    }
    if(this.neighbors[to_node]){
      this.neighbors[to_node].push(from_node);
    }
    else{
      this.neighbors[to_node] = [from_node];
    }
    this.distances[[from_node, to_node]] = distance;
    this.distances[[to_node, from_node]] = distance;
  }
  print_graph(){
    console.log('Set of nodes are: ', this.nodes);
    console.log('Neighbors are: ', this.neighbors);
    console.log('Distances are: ', this.distances);
  }
}

function dijkstra(graph, source){
  let result = {};
  result[source] = 0;
  for (let node of graph.nodes){
    if(node != source){
      result[node] = Infinity;
    }
  }
  let unvisited = new Set(graph.nodes);
  let path = {};
  // As long as the unvisited is non-empty
  while(unvisited.size != 0){
      let current_node = null;
      // Find the unvisited node having smallest known distance from the source node.
      for(let unvisited_node of unvisited){
        if(Object.keys(result).includes(unvisited_node)){
          if(current_node == null){
            current_node = unvisited_node;
          } else if(result[unvisited_node] < result[current_node]){
            current_node = unvisited_node;
          }
        }
      }
      if(current_node == null){
        break;
      }
      // known distance of min_node
      let known_dist = result[current_node];
      // 2. For the current node, find all the unvisited neighbors.
      // For this, you have to calculate the distance of each unvisited neighbor.
      for(let neighbor of graph.neighbors[current_node]){
        if(unvisited.has(neighbor)){
          //console.log(graph.distances[[current_node, neighbor]]);
          let distance_diff = known_dist + graph.distances[[current_node, neighbor]];
          // 3. If the calculated distance of the unvisited neighbor
          // is less than the already known distance in the result dictionary,
          // update the shortest distance in the result dictionary.
          if( !(Object.keys(result).includes(neighbor)) || (distance_diff < result[neighbor]) ){
            result[neighbor] = distance_diff;
            // 4. If there is an update in the result dictionary,
            // you need to update the path dictionary as well for the same key.
            path[neighbor] = current_node;
          }
        }
      }
      // Remove the current_node from the unvisited set.
      unvisited.delete(current_node);
  }
  return result;
}

let testGraph = new Graph();
for(let node of ['A', 'B', 'C', 'D', 'E']){
  testGraph.add_node(node);
}
testGraph.add_edge('A', 'B', 3);
testGraph.add_edge('A', 'D', 2);
testGraph.add_edge('B', 'D', 4);
testGraph.add_edge('B', 'E', 6);
testGraph.add_edge('B', 'C', 1);
testGraph.add_edge('C', 'E', 2);
testGraph.add_edge('E', 'D', 1);
//console.log(testGraph.distances[['A', 'B']]);
let results = dijkstra(testGraph, 'A');
console.log(results);
testGraph = new Graph();
for(let node of ['A', 'B', 'C']){
  testGraph.add_node(node);
}
testGraph.add_edge('A', 'B', 5);
testGraph.add_edge('B', 'C', 5);
testGraph.add_edge('A', 'C', 10);
results = dijkstra(testGraph, 'A');
console.log(results);
testGraph = new Graph();
for(let node of ['A', 'B', 'C', 'D', 'E', 'F']){
  testGraph.add_node(node);
}
testGraph.add_edge('A', 'B', 5);
testGraph.add_edge('A', 'C', 4);
testGraph.add_edge('D', 'C', 1);
testGraph.add_edge('B', 'C', 2);
testGraph.add_edge('A', 'D', 2);
testGraph.add_edge('B', 'F', 2);
testGraph.add_edge('C', 'F', 3);
testGraph.add_edge('E', 'F', 2);
testGraph.add_edge('C', 'E', 1);
results = dijkstra(testGraph, 'A');
console.log(results);
