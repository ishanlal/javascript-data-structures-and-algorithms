// arr: [0 ... n-1]
// indicies i and j, if i<j and arr[i] > arr[j]
// then pair (i, j) or (arr[i], arr[j]) is called inversion of arr.
function count_inversions(arr){
  let start_index = 0;
  let end_index = arr.length-1;
  let output = inversion_count_func(arr, start_index, end_index);
  return output;
}
function inversion_count_func(arr, start_index, end_index){
  if (start_index >= end_index){
    return 0;
  }
  let mid_index = start_index+Math.floor((end_index-start_index)/2);
  let left_answer = inversion_count_func(arr, start_index, mid_index); // find inversions in the left half
  let right_answer = inversion_count_func(arr, mid_index+1, end_index); // find inversions in the right half
  let output = left_answer+right_answer;
  output = output + merge_two_sorted_halves(arr, start_index, mid_index, mid_index+1, end_index);
  return output;
}
function merge_two_sorted_halves(arr, start_one, end_one, start_two, end_two){
  let count = 0;
  let left_index = start_one;
  let right_index = start_two;
  // output sorted list
  let output_length = (end_two-start_two+1) + (end_one-start_one+1);
  let output_list = Array(output_length).fill(0);
  let index = 0;
  // merge sort
  while (index < output_length){
    if(arr[left_index] <= arr[right_index]){
      output_list[index] = arr[left_index];
      left_index += 1;
    } else{ // inversion detected
      count = count + (end_one - left_index +1);
      output_list[index] = arr[right_index];
      right_index += 1;
    }
    index=index+1;
    // ending conditions
    if (left_index>end_one){
      for(let i = right_index; i<end_two+1; i++) {
        output_list[index] = arr[i];
        index=index+1;
      }
      break;
    } else if (right_index>end_two){
      for(let j = left_index; j<end_one+1; j++){
        output_list[index] = arr[j];
        index += 1;
      }
      break;
    }
  }
  index = start_one;
  for(let i = 0; i<output_length ;i++){
    arr[index] = output_list[i];
    index = index+1;
  }
  return count;
}
// Test Function
function test_function(test_case){
    let arr = test_case[0];
    let solution = test_case[1];
    if (count_inversions(arr) == solution){
      console.log('Pass')
    }else{
      console.log('Fail')
    }
}
// Test Case
let arr = [2, 5, 1, 3, 4];
let solution = 4;
let test_case = [arr, solution];
test_function(test_case);
arr = [54, 99, 49, 22, 37, 18, 22, 90, 86, 33]
solution = 26
test_case = [arr, solution]
test_function(test_case)
arr = [1, 2, 4, 2, 3, 11, 22, 99, 108, 389]
solution = 2
test_case = [arr, solution]
test_function(test_case)
