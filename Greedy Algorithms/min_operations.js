function min_operations(target){
  let num_steps = 0;
  while (target != 0) {
    if(target % 2 == 0){
      target = Math.floor(target/2);
    }else{
      target -= 1;
    }
    num_steps += 1;
  }
  return num_steps;
}
function test_function(test_case){
  let target = test_case[0];
  let solution = test_case[1];
  let output = min_operations(target);
  if(output == solution){
    console.log('Pass');
  }else{
    console.log('Fail');
  }
}
let target = 18
let solution = 6
let test_case = [target, solution]
test_function(test_case)
target = 69
solution = 9
test_case = [target, solution]
test_function(test_case)
