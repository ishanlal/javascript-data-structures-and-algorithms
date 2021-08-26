// Divide and Conquer!
// Efficency: O(nlogn)
// Space: O(n)
function mergesort(items){
  if(items.length <= 1){
    return items;
  }
  let mid = Math.floor(items.length/2);
  let left = items.slice(0, mid);
  let right = items.slice(mid);
  left = mergesort(left);
  right = mergesort(right);
  return merge(left, right);
}
function merge(left, right){
  let merged = [];
  let left_index = 0;
  let right_index = 0;
  while((left_index<left.length) && (right_index<right.length)){
    if(left[left_index] > right[right_index]){
      merged.push(right[right_index]);
      right_index += 1;
    } else {
      merged.push(left[left_index]);
      left_index += 1;
    }
  }
  //if(left.slice(left_index).length != 0){
    merged = merged.concat(left.slice(left_index));
  //}
  //if(right.slice(right_index).length != 0){
    merged = merged.concat(right.slice(right_index));
  //}
  return merged;
}
let test_list_1 = [8,3,1,7,0,10,2];
let test_list_2 = [1, 0];
let test_list_3 = [97, 98, 99];
console.log(`${test_list_1} to ${mergesort(test_list_1)}`);
console.log(`${test_list_2} to ${mergesort(test_list_2)}`);
console.log(`${test_list_3} to ${mergesort(test_list_3)}`);
