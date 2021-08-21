function selection_sort(arr){
for(let i = 0; i<arr.length ; i++){
  let j_min = i;
  for(let j = i+1; j<arr.length ;j++){
    if(arr[j] < arr[j_min]){
      j_min = j;
    }
    if(j_min != i){
      let temp = arr[i];
      arr[i] = arr[j_min];
      arr[j_min] = temp;
      temp = null;
    }
  }
}
return arr;
}
console.log(selection_sort([2, 8, 5, 3, 9, 4, 1, 7]));
// Implemented on arrays.
// Worst: O(n^2)
// Best: O(n^2)
// Average: O(n^2)
// Space: O(1)
