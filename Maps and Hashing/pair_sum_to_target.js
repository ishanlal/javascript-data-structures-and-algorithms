function pair_sum_to_target(input_list, target){
  let index_dict = {}; // element of input list becomes key, index of input list becomes value
  for (let [index, element] of Object.entries(input_list)){ // traverse once through the input list.
    if(index_dict[target-element]){ // If key exists in the dictionary
      return [index_dict[target-element], index]; // return the list of indicies.
    }
    index_dict[element] = index;
  }
  return [-1,-1];
}
function test_function(test_case){
  let output = pair_sum_to_target(test_case[0], test_case[1]);
  console.log(output);
  if ( output.sort().every((val, index)=>val==test_case[2][index]) ){
    console.log('Pass');
  }
  else{
    console.log('Fail');
  }
}

const _ = require('lodash');

let test_case_1 = [[1,5,9,7],8,[0,3]];
test_function(test_case_1);
let test_case_2 = [[10,5,9,8,12,1,16,6], 16, [0,7]];
test_function(test_case_2);
let test_case_3 = [[0,1,2,3,-4], -4, [0,4]];
test_function(test_case_3);
