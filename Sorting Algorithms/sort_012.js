function sort_012(input_list){
  let next_pos_0 = 0;
  let next_pos_2 = input_list.length-1;
  let front_index = 0;
  while (front_index <= next_pos_2){
    if(input_list[front_index] == 0){
      input_list[front_index] = input_list[next_pos_0];
      input_list[next_pos_0] = 0;
      next_pos_0 += 1;
      front_index += 1;
    } else if (input_list[front_index] == 2) {
      input_list[front_index] = input_list[next_pos_2];
      input_list[next_pos_2] = 2;
      next_pos_2 -= 1;
    } else {
      front_index += 1;
    }
  }
}
function test_function(test_case){
  sort_012(test_case);
  console.log(test_case);
  if (test_case == test_case.sort((a, b)=>{return a-b}) ){
    console.log('Pass');
  } else{
    console.log('Fail');
  }
}
let test_case = [0, 0, 2, 2, 2, 1, 1, 1, 2, 0, 2];
test_function(test_case);
test_case = [2, 1, 2, 0, 0, 2, 1, 0, 1, 0, 0, 2, 2, 2, 1, 2, 0, 0, 0, 2, 1, 0, 2, 0, 0, 1]
test_function(test_case);
test_case = [2, 2, 0, 0, 2, 1, 0, 2, 2, 1, 1, 1, 0, 1, 2, 0, 2, 0, 1];
test_function(test_case);
