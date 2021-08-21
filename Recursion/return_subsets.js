function subsets(arr){
  return return_subsets(arr, 0);
}
function return_subsets (arr, index){
  if (index >= arr.length){
    return [[]];
  }
  let small_output = return_subsets(arr, index+1);
  let output = [];
  //console.log(small_output);
  for (let element of small_output){
    output.push(element);
  }
  for(let element of small_output){
    let current = [];
    current.push(arr[index]);
    current = current.concat(element);
    output.push(current);
  }
  return output;
}
let result = subsets([5, 7]);
console.log(result);
result = subsets([9, 12, 15]);
console.log(result);
