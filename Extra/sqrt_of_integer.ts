function sqrt(input_number) {
  /*
  Calculate the floored square root of a number
  Args: number(int): Number to find the floored squared root
  Returns: int: Floored Square Root
  */
  let negative = false;
  if(input_number == -1){
    return 'i';
  }
  if(input_number < 0){
    negative = true;
    input_number = input_number*(-1);
  }
  if(input_number == 0 || input_number == 1){
    return input_number;
  }
  let start_index = 1;
  let end_index = input_number;
  let return_value;
  while(start_index <= end_index){
    let mid_num = Math.floor((start_index+end_index)/2);
    if((mid_num*mid_num) == input_number){
      return_value = mid_num;
      break;
    }
    if((mid_num*mid_num) < input_number){
      start_index = mid_num + 1;
      return_value = mid_num;
    }else{
      end_index = mid_num - 1;
    }
  }
  if(negative == true){
    return_value = String(return_value);
    return_value = return_value + 'i';
    return return_value;
  }else{
    return return_value;
  }
}
let results = sqrt(9);
console.log(results);
results = sqrt(-9);
console.log(results);
results = sqrt(0);
console.log(results);
results = sqrt(16);
console.log(results);
results = sqrt(1);
console.log(results);
results = sqrt(27);
console.log(results);
results = sqrt(40);
console.log(results);
results = sqrt(-40);
console.log(results);
results = sqrt(10**9);
console.log(results);
