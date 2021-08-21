function get_characters(num){
  if (num == 2){
    return 'abc';
  } else if (num==3) {
    return 'def';
  } else if (num==4) {
    return 'ghi';
  } else if (num==5) {
    return 'jkl';
  } else if (num==6) {
    return 'mno';
  } else if (num==7) {
    return 'pqrs';
  } else if (num==8) {
    return 'tuv';
  } else if (num==9) {
    return 'wxyz';
  } else{
    return '';
  }
}

function keypad(num){
  if (num <= 1) {
    return [''];
  } else if (1 < num && num <= 9) {
    //console.log(get_characters(num).split(''));
    return get_characters(num).split('');
  }
  let last_digit = num%10;
  let recursive_output = keypad(Math.floor(num/10));
  let keypad_strings = get_characters(last_digit).split('');
  let out_list = [];
  for (let key of keypad_strings){
    for (let item of recursive_output){
      let new_char = item+key;
      out_list.push(new_char);
    }
  }
  return out_list;
}

let result = keypad(23);
console.log(result);
result = keypad(354);
console.log(result);
