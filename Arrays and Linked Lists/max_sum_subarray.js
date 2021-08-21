function max_sum_subarray(arr){
  current_sum = arr[0];
  max_sum = arr[0];
  for (let i = 1; i<arr.length ;i++){
    current_sum = Math.max((current_sum+arr[i]), arr[i]);
    max_sum = Math.max(current_sum, max_sum);
  }
  return max_sum;
}
let results = max_sum_subarray([1, 2, -5, -4, 1, 6]);
console.log(results);
