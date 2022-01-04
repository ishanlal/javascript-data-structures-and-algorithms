var assert = require('assert');
function lcs(str_a, str_b){
  // Init the matrix
  let lut = Array(str_a.length+1).fill(0).map(()=> Array(str_b.length+1).fill(0));
  for (let [char_a_i, char_a] of Object.entries(str_a)){
    for(let [char_b_i, char_b] of Object.entries(str_b)){
      if(char_a==char_b){
        lut[Number(char_a_i)+1][Number(char_b_i)+1] = lut[Number(char_a_i)][Number(char_b_i)]+1;
      }
      else{
        lut[Number(char_a_i)+1][Number(char_b_i)+1] = Math.max(
          lut[Number(char_a_i)][Number(char_b_i)+1],
          lut[Number(char_a_i)+1][Number(char_b_i)]);
      }
    }
  }
  return lut[str_a.length][str_b.length];
}
let test_A1 = 'WHOWEEKLY';
let test_B1 = 'HOWONLY';
lcs_val_1 = lcs(test_A1, test_B1);
let test_A2 = 'CATSINSPACETWO';
let test_B2 = 'DOGSPACEWHO';
lcs_val_2 = lcs(test_A2, test_B2);
console.log('LCS val 1 = ', lcs_val_1);
assert(lcs_val_1==5, 'Incorrect LCS value');
console.log('LCS val 2 = ', lcs_val_2);
assert(lcs_val_2==7, 'Incorrect LCS value');
console.log('Tests passed!');
