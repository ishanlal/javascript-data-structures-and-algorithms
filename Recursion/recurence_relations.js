function binary_search(arr, target){
  return binary_search_func(arr, 0, arr.length-1, target);
}
function binary_search_func(array, start_index, end_index, target){
  if (start_index > end_index){
    return -1;
  }
  let mid_index = Math.floor((start_index+end_index)/2);
  if (array[mid_index] == target){
    return mid_index;
  } else if (array[mid_index] < target) {
    return binary_search_func(array, mid_index+1, end_index, target);
  } else{
    return binary_search_func(array, start_index, mid_index-1, target);
  }
}
let result = binary_search([0, 1, 2, 3, 4, 5, 6, 7, 8], 5);
console.log(result);
