function insertion_sort(arr){
for(let i = 0;i<arr.length;i++){
  let j = i;
  while(j>0 && arr[j-1] > arr[j]){
    let temp = arr[j-1];
    arr[j-1] = arr[j];
    arr[j] = temp;
    temp = null;
    j = j-1;
  }
}
return arr;
}
console.log(insertion_sort([2, 8, 5, 3, 9, 4]));
// Implemented on arrays
// Worst: O(n^2)
// Best: O(n)
// Average: O(n^2)
// Space: O(n)
