const lodash = require('lodash');
function string_permutations(string){
  return permute(string, 0);
}
function permute(string, index){
  console.log('string, index: ', string, index);
  let out_list = [];
  if (index >= string.length){
    return [''];
  }
  let small_output = permute(string, index+1);
  let first_element = string[index];
  console.log('SO: ', small_output);
  for (let subString of small_output){
    console.log('subString: ', subString);
    for (let j = 0; j<(small_output[0].length+1) ;j++){
      console.log('subString: ', subString);
      console.log('J: ', j);
      let new_substring = subString.slice(0,j) + first_element + subString.slice(j);
      console.log('new_str: ', new_substring);
      console.log('out_list: ', out_list);
      out_list.push(new_substring);
      console.log('out_list: ', out_list);
    }
  }
  return out_list;
}
let results = string_permutations('abcd');
console.log(results);
