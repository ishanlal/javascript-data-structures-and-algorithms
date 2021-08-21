function deep_reverse(arr){
  if (arr.length < 1){
    return arr;
  }
  let out_list = [];
  for (let i = (arr.length-1); i>=0 ;i--){
    if (typeof(arr[i]) === 'object'){
      arr[i] = deep_reverse(arr[i]);
    }
    out_list.push(arr[i]);
  }
  return out_list;
}
let result = deep_reverse([1, 2, [3, 4, 5], 4, 5]);
console.log(result);
result = deep_reverse([1, 2, 3, 4, 5]);
console.log(result);
result = deep_reverse([1, [2, 3, [4, [5, 6]]]]);
console.log(JSON.stringify(result));
result = deep_reverse([1, [2,3], 4, [5,6]]);
console.log(result);
