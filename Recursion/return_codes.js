function get_alphabet(num){
  return String.fromCharCode(num+96);
}
function all_codes (number){
  if (number == 0) {
    return [''];
  }
  let remainder_100 = number%100;
  let output_100 = [];
  if (remainder_100 <= 26 && number > 9){
    output_100 = all_codes(Math.floor(number/100));
    let alphabet_100 = get_alphabet(remainder_100);
    for (let [index, element] of output_100.entries()){
      output_100[index] = element+alphabet_100;
    }
  }
  let remainder_10 = number%10;
  let output_10 = all_codes(Math.floor(number/10));
  let alphabet_10 = get_alphabet(remainder_10);
  for (let [index, element] of output_10.entries()){
    output_10[index] = element+alphabet_10;
  }
  let output = [];
  output = output.concat(output_100);
  output = output.concat(output_10);
  return output;
}
console.log(all_codes(123));
console.log(all_codes(145));
console.log(all_codes(1145));
console.log(all_codes(4545));
