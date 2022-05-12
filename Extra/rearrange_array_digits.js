function rearrange_digits(input_list){
  let temp = input_list;
  let first = '';
  let second = '';
  let max_number = 0;
  let max_index = 0;
  for (let k = 0; k<temp.length; k++){
    max_number = Math.max(temp);
    max_index = temp.indexOf(max_number);
    if(k%2 == 0){
      first += String(max_number);
    }else{
      second += String(max_number);
    }
    delete temp[temp.indexOf(max_number)];
  }
  first = Number(first);
  second = Number(second);
  return [first, second];
}

function test_function(test_case){
  let output = rearrange_digits(test_case[0]);
  let solution = test_case[1];
  if(output.reduce((a, b) =>{a+b}) == solution.reduce((a, b) =>{a+b})){
    console.log('pass');
  }else{
    console.log('fail');
  }
}

test_function([[1, 2, 3, 4, 5], [542, 31]]);
test_function([[4, 6, 2, 5, 9, 8], [964, 852]]);
//egde case 1: empty list
test_function([[0,0], [0, 0]]);
//edge case 2: large set and large numbers
//test_function([[i for i in range(0,10)], [int("".join(map(str,range(9,-1,-2)))), int("".join(map(str,range(8,-1,-2))))]])
//edge case 3: very large set and large numbers
//test_function([[i for i in range(0,10000)], [int("".join(map(str,range(9999,-1,-2)))), int("".join(map(str,range(9998,-1,-2))))]])
