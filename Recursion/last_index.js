function last_index(arr, target){
  return last_index_arr(arr, target, arr.length-1);
}
function last_index_arr(arr, target, index){
  if (index<0){
    return -1;
  }
  if(arr[index] == target){
    return index;
  }
  return last_index_arr(arr, target, index-1);
}
let result = last_index([1, 2, 5, 5, 4], 5);
console.log(result);
result = last_index([1, 2, 5, 5, 4], 7);
console.log(result);
result = last_index([91, 19, 3, 8, 9], 91);
console.log(result);
result = last_index([1, 1, 1, 1, 1, 1], 1);
console.log(result);
