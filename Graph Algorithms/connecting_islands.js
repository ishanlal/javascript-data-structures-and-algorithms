let heapq = require('heapq');
function create_graph(num_islands, bridge_config){
  let graph = [];
  for(let i = 0;i<num_islands+1;i++){
    graph.push([]);
  }
  for(let config of bridge_config){
    let source = config[0];
    let destination = config[1];
    let cost = config[2];
    graph[source].push([destination, cost]);
    graph[destination].push([source, cost]);
  }
  return graph;
}
function minimum_cost(graph){
  let start_vertex = 1;
  let visited = [];
  for(let j = 0;j<(graph.length+1);j++){
    visited[j] = false;
  }
  let minHeap = [];
  let cmp = function(x, y) {return x[0] < y[0];}
  heapq.push(minHeap, [0, start_vertex], cmp);
  let total_cost = 0;
  while(minHeap.length > 0){
    let [cost, current_vertex] = heapq.pop(minHeap, cmp);
    if(visited[current_vertex]){
      continue;
    }
    total_cost = (total_cost+cost);
    for(let [neighbor, edge_cost] of graph[current_vertex]){
      heapq.push(minHeap, [edge_cost, neighbor], cmp);
    }
    visited[current_vertex] = true;
  }
  return total_cost;
}
function get_minimum_cost_of_connecting(num_islands, bridge_config){
  let graph = create_graph(num_islands, bridge_config);
  return minimum_cost(graph);
}

function test_function(test_case){
  let num_islands = test_case[0];
  let bridge_config = test_case[1];
  let solution = test_case[2];
  let output = get_minimum_cost_of_connecting(num_islands, bridge_config);
  if (output == solution){
      console.log('Pass');
  }
  else{
    console.log('Fail');
  }
}
let num_islands = 4;
let bridge_config = [[1, 2, 1], [2, 3, 4], [1, 4, 3], [4, 3, 2], [1, 3, 10]];
let solution = 6;
let test_case = [num_islands, bridge_config, solution];
test_function(test_case);
num_islands = 5;
bridge_config = [[1, 2, 5], [1, 3, 8], [2, 3, 9]];
solution = 13;
test_case = [num_islands, bridge_config, solution];
test_function(test_case);
num_islands = 5;
bridge_config = [[1, 2, 3], [1, 5, 9], [2, 3, 10], [4, 3, 9]];
solution = 31;
test_case = [num_islands, bridge_config, solution];
test_function(test_case);
