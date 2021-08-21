function binary_search(array, target){
  let start_index = 0;
  let end_index = (array.length-1);
  while(start_index <= end_index){
    let mid_index = Math.floor((start_index+end_index)/2);
    if (array[mid_index] == target){
      return mid_index;
    }else if (array[mid_index] > target) {
      end_index = mid_index-1;
    } else {
      start_index = mid_index+1;
    }
  }
  return -1;
}
let results = binary_search([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 6);
console.log(results); // index = 6

function binary_search_recursive(array, target){
  return binary_search_recursive_fast(array, target, 0, (array.length-1));
}
function binary_search_recursive_fast(array, target, start_index, end_index){
  if (start_index > end_index){
    return -1
  }
  let mid_index = Math.floor((start_index+end_index)/2);
  if(array[mid_index] == target){
    return mid_index;
  } else if (array[mid_index] > target) {
    return binary_search_recursive_fast(array, target, start_index, mid_index-1);
  } else{
    return binary_search_recursive_fast(array, target, mid_index+1, end_index);
  }
}
let bsr = binary_search_recursive([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 4);
console.log(bsr); // index = 4
