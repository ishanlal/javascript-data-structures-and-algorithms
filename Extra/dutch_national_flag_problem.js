function sort_012(input_list){
  let front_index = 0;
  let pos_0 = 0;
  let pos_2 = input_list.length - 1; // back
  while(front_index <= pos_2){
    if(input_list[front_index] == 0){
      input_list[front_index] = input_list[pos_0];
      input_list[pos_0] = 0;
      pos_0 += 1;
      front_index += 1;
    }
    else if(input_list[front_index] == 2){
      input_list[front_index] = input_list[pos_2];
      input_list[pos_2] = 2;
      pos_2 -= 1;
    }
    else{
      front_index+=1;
    }
  }
  return input_list;
}

function test_function(test_case){
  let sorted_array = sort_012(test_case);
  console.log(sorted_array);
  if(sorted_array.toString() === test_case.sort().toString()){
    console.log('Pass');
  }else{
    console.log('Fail');
  }
}

test_function([0,0,2,2,2,1,1,1,2,0,2]);
test_function([2,1,2,0,0,2,1,0,1,0,0,2,2,2,1,2,0,0,0,2,1,0,2,0,0,1]);
test_function([0,0,0,0,0,0,1,1,1,1,1,1,2,2,2,2,2,2,2]);
test_function([]);
let twos = Array(100).fill(2);
let ones = Array(120).fill(1);
let zeros = Array(200).fill(0);
let huge = twos.concat(ones, zeros);
test_function(huge);
