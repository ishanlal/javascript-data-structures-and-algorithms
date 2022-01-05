function lps(input_string){
  let n = input_string.length;
  let LUT = Array(n).fill(0).map(()=>Array(n).fill(0));
  for (let i = 0; i<n ;i++){
    LUT[i][i] = 1;
  }
  for(let size = 2; size<(n+1) ;size++){
    for(let start = 0; start<(n-size+1) ;start++){
      let end = start+size-1;
      if(size == 2 && input_string[start] == input_string[end]){
        LUT[start][end] = 2;
      }
      else if (input_string[start] == input_string[end]){
        LUT[start][end] = LUT[start+1][end-1]+2;
      }else{
        LUT[start][end] = Math.max(LUT[start][end-1], LUT[start+1][end]);
      }
    }
  }
  return LUT[0][n-1];
}
function test_function(test_case){
  let string = test_case[0];
  let solution = test_case[1];
  let output = lps(string);
  console.log(output);
  if (output == solution){
    console.log('Pass');
  }else {
    console.log('Fail');
  }
}
let string = 'BxAoNxAoNxA'
let solution = 5;
let test_case = [string, solution]
test_function(test_case);
string = 'BANANO';
solution = 3;
test_case = [string, solution];
test_function(test_case);
string = "TACOCAT";
solution = 7;
test_case = [string, solution];
test_function(test_case);
