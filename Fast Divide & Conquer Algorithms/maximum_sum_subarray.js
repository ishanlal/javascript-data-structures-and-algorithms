function maxCrossingSum(arr, start, mid, stop){
  let leftSum = arr[mid];                                     // Denotes the sum of left part from mid element to the current element
  let leftMaxSum = arr[mid];                                  // Keep track of maximum sum
  // Traverse in reverse direction from (mid-1) to start
  for(let i = mid-1; i>start-1 ;i--){
    leftSum = leftSum + arr[i];
    if (leftSum > leftMaxSum){
        leftMaxSum = leftSum;
    }
  }
  // RIGHT PHASE - Traverse the Right part, starting from (mid+1)
  let rightSum = arr[mid+1];                                  // Denotes the sum of right part from (mid+1) element to the current element
  let rightMaxSum = arr[mid+1];                               // Keep track of maximum sum
  // Traverse in forward direction from (mid+2) to stop
  for (let j = mid+2; j<stop+1 ;j++){
    rightSum = rightSum + arr[j];
    if (rightSum > rightMaxSum){
        rightMaxSum = rightSum;
    }
  }
  return (rightMaxSum + leftMaxSum);
}
//Recursive function
function maxSubArrayRecursive(arr, start, stop){
  if (start == stop) {
    return arr[start];
  }
  if (start < stop) {
    let mid = Math.floor((start+stop)/2);
    let L = maxSubArrayRecursive(arr, start, mid);
    let R = maxSubArrayRecursive(arr, mid+1, stop);
    let C = maxCrossingSum(arr, start, mid, stop);
    return Math.max(C, Math.max(L,R));
  }
  else{
    return null;
  }
}
function maxSubArray(arr){
  let start = 0;
  let stop = arr.length-1;
  return maxSubArrayRecursive(arr, start, stop);
}

let arr = [-2, 7, -6, 3, 1, -4, 5, 7];
let results = maxSubArray(arr);
console.log(results);
arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4] ;
results = maxSubArray(arr);
console.log(results);
arr = [-4, 14, -6, 7];
results = maxSubArray(arr);
console.log(results);
arr = [-2, 1, -3, 5, 0, 3, 2, -5, 4];
results = maxSubArray(arr);
console.log(results);
arr = [-2, -5, 6, -2, -3, 1, 5, -6];
results = maxSubArray(arr);
console.log(results);
