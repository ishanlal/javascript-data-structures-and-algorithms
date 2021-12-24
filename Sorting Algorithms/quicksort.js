function sort_a_little_bit(items, begin_index, end_index){
let left_index = begin_index;
let pivot_index = end_index; // picking last element as pivot
let pivot_value = items[pivot_index];

while (pivot_index != left_index){
  let item = items[left_index]; // grab first item
  if (item <= pivot_value){
    left_index += 1; // move left pointer
    continue;
  }
  // Place the item before the pivot at left_index
  items[left_index] = items[pivot_index-1];
  // Shift pivot one to the left
  items[pivot_index-1] = pivot_value;
  // Place item at pivot's previous location
  items[pivot_index] = item;
  // Update pivot_index
  pivot_index -= 1;
}
return pivot_index;
}
function sort_all(items, begin_index, end_index){
  if(end_index <= begin_index){
    return;
  }
  let pivot_index = sort_a_little_bit(items, begin_index, end_index);
  sort_all(items, begin_index, pivot_index-1);
  sort_all(items, pivot_index+1, end_index);
}
function quicksort(items){
  sort_all(items, 0, items.length-1)
}
let items = [8,3,1,7,0,10,2];
quicksort(items);
console.log(items);
items = [1,0];
quicksort(items);
console.log(items);
items = [96, 97, 98];
quicksort(items);
console.log(items);
