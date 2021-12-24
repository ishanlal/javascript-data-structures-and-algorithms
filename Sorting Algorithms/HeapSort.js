function heapify(arr, n, i){
/*
* i = index of current node.
* find 2 child nodes (as if array is a binary tree)
* find largest value
* if one of the children is larger, swap the values and recurse into that subtree.
*/
// Consider current index as largest.
let largest_index = i;
let left_node = 2*i+1;
let right_node = 2*i+2;
// Compare with left child
if (left_node < n && arr[i]<arr[left_node]){
  largest_index = left_node;
}
if (right_node < n && arr[largest_index]<arr[right_node]){
  largest_index = right_node;
}
if (largest_index != i){
  [arr[i], arr[largest_index]] = [arr[largest_index], arr[i]];
  heapify(arr, n, largest_index);
}
}
function heapsort(arr){
  /*
  * Convert array into a max heap by calling heapify on each node.
  * Swap first (largest) with the last element.
  * Make array minus the last element into maxheap again.
  * Repeat untill whole array is sorted (lowest ... higest).
  */
  let n = arr.length;
  for(let i = n;i>-1;i--){
    heapify(arr, n, i);
  }
  // one by extract elements
  for(let k = n-1;k>0;k--){
    [arr[k], arr[0]] = [arr[0], arr[k]];
    heapify(arr, k, 0);
  }
}
function test_function(test_case){
  heapsort(test_case[0]);
  if(_.isEqual(test_case[0], test_case[1])){
    console.log('Pass');
  }else{
    console.log('False');
  }
}
const _ = require('lodash');
let arr = [3, 7, 4, 6, 1, 0, 9, 8, 9, 4, 3, 5];
let solution = [0,1,3,3,4,4,5,6,7,8,9,9];
test_case = [arr, solution];
test_function(test_case);
arr = [5, 5, 5, 3, 3, 3, 4, 4, 4, 4];
solution = [3, 3, 3, 4, 4, 4, 4, 5, 5, 5];
test_case = [arr, solution];
test_function(test_case);
arr = [99];
solution = [99];
test_case = [arr, solution];
test_function(test_case);
arr = [0, 1, 2, 5, 12, 21, 0];
solution = [0, 0, 1, 2, 5, 12, 21];
test_case = [arr, solution];
test_function(test_case);
