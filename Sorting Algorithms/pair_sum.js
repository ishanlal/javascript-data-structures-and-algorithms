const _ = require('lodash');
function pair_sum(arr, target){
  // sort the list
  let arr_s = arr.sort((a, b)=>{return a-b});
  // Initialize two pointer - one from the start of the array and other from the end.
  let front_index = 0;
  let back_index = (arr_s.length-1);
  while (front_index<back_index){
    let front = arr_s[front_index];
    let back = arr_s[back_index];
    if (front+back == target){
      return [front, back];
    } else if ((front+back) < target) {
      front_index += 1;
    } else {
      back_index -= 1;
    }
  }
  return [null, null];
}
function test_function(test_case){
  //console.log(test_case);
  let input_list_ = test_case[0];
  let target_ = test_case[1];
  let solution_ = test_case[2];
  let output_ = pair_sum(input_list_, target_);
  //console.log(output_);
  if(_.isEqual(output_, solution_)){
    console.log('Pass');
  } else {
    console.log('False');
  }
}
let input_list = [2, 7, 11, 15];
let target = 9;
let solution = [2,7];
let test_case = [input_list, target, solution];
//console.log(test_case);
test_function(test_case);
input_list = [0, 8, 5, 7, 9];
target = 9;
solution = [0,9];
test_case = [input_list, target, solution];
test_function(test_case);
input_list = [110, 9, 89];
target = 9;
solution = [null, null];
test_case = [input_list, target, solution];
test_function(test_case);
