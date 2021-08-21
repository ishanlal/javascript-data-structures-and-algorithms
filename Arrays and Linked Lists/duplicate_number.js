let arr = [0,2,3,1,4,5,3];
function duplicate_number(arr){
  let current_sum = 0;
  let expected_sum = 0;
  for (let i = 0; i<(arr.length) ;i++){
    current_sum += arr[i];
  }
  for (let k = 0; k<(arr.length-1) ;k++){
    expected_sum += k;
  }
  console.log(current_sum);
  console.log(expected_sum);
  return (current_sum - expected_sum);
}
let result = duplicate_number(arr);
console.log(result);
