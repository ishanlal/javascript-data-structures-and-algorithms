function fastSelect(arr, k){
  let n = arr.length;
  if(k>0 && k<=n){ // k should be a valid index
    // Helper variables
    let setOfMedians = [];
    let arr_less_p = [];
    let arr_equal_p = [];
    let arr_more_p = [];
    let i = 0;
    let pivot;
    let median;
    // Step 1: Break arr into groups of size 5
    // Step 2: For each group, sort, and find median, add the median to setOfMedians
    // floor(n/5) gives the integer quotient of the division, find median of each group of size 5
    while(i<Math.floor(n/5)){
      median = findMedian(arr, 5*i, 5);
      setOfMedians.push(median);
      i += 1;
    }
    // If n is not a multiple of 5, then a last group with size = n%5 will be formed
    if(5*i < n){
      median = findMedian(arr, 5*i, n%5);
      setOfMedians.push(median);
    }
    // Step 3: Find the median of setOfMedians
    if(setOfMedians.length == 1){
      pivot = setOfMedians[0];
    }
    else if ( setOfMedians.length > 1 ) {
      pivot = fastSelect(setOfMedians, Math.floor(setOfMedians.length/2));
    }
    // Step 4: Partition the original arr into three sub-arrays
    for (let element of arr){
      if(element<pivot){
        arr_less_p.push(element);
      }else if (element>pivot) {
        arr_more_p.push(element);
      } else {
        arr_equal_p.push(element);
      }
    }
    // Step 5: Recurse based on the sizes of the three sub-arrays
    if(k <= arr_less_p.length){
      return fastSelect(arr_less_p, k);
    } else if (k > (arr_less_p.length+arr_equal_p.length)){
      return fastSelect(arr_more_p, (k-arr_less_p.length-arr_equal_p.length));
    }
    else{
      return pivot;
    }
  }
}

// Helper function
function findMedian(arr, start, size){
let myList = [];
for (let m = start; m<start+size ;m++){
  myList.push(arr[m]);
}
myList = myList.sort((a, b)=>{return a-b});
return myList[Math.floor(size/2)];
}

let arr = [6, 80, 36, 8, 23, 7, 10, 12, 42];
let k = 5;
let results = fastSelect(arr, k);
console.log(results);
arr = [5, 2, 20, 17, 11, 13, 8, 9, 11];
k = 5;
results = fastSelect(arr, k);
console.log(results);
arr = [6, 80, 36, 8, 23, 7, 10, 12, 42, 99];
k = 10;
results = fastSelect(arr, k);
console.log(results);
