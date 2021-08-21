function staircase(n){
  let num_dict = {};
  return staircase_faster(n, num_dict);
}
function staircase_faster(n, num_dict){
  let output;
  if (n == 1){
    output = 1;
  } else if (n == 2) {
    output = 2;
  } else if (n == 3) {
    output = 4;
  } else {
    let first_output;
    let second_output;
    let third_output;

    if((n-1) in num_dict){
      first_output = num_dict[n-1];
    } else{
      first_output = staircase_faster(n-1, num_dict);
    }
    if((n-2) in num_dict){
      second_output = num_dict[n-2];
    } else{
      second_output = staircase_faster(n-2, num_dict);
    }
    if((n-3) in num_dict){
      third_output = num_dict[n-3];
    } else{
      third_output = staircase_faster(n-3, num_dict);
    }
    output = first_output + second_output + third_output;
  }
  num_dict[n] = output;
  return output;
}
console.log(staircase(4)); //7
console.log(staircase(5)); //13
console.log(staircase(3)); //4
console.log(staircase(20)); //121415
