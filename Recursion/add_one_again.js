function add_one(arr){
  if (arr == '9'){
    return [1, 0];
  }
  else if (arr[arr.length-1] < 9){
    arr[arr.length-1] += 1;
  }
  else{
    arr.splice(-1);
    arr = add_one(arr);
    arr.push(0);
  }
  return arr;
}
let results = add_one([9]);
console.log(results);
results = add_one([9, 9, 9]);
console.log(results);
results = add_one([1, 2, 3]);
console.log(results);
