function coin_change(coins, amount){
  let memo = {};
  function return_change (remaining){
    if (remaining<0){return Infinity;}
    if(remaining == 0){return 0;}
    if (!Object.keys(memo).includes(remaining)){
      let saved_val = [];
      for(let c of coins){
        saved_val.push(return_change(remaining-c)+1);
      }
      memo[remaining] = Math.min(saved_val);
    }
    console.log(memo);
    return memo[remaining];
  }
  let res = return_change(amount);
  if(res == Infinity){
    return -1;
  }else {
    return res
  }
}
function test_function(test_case){
  let arr = test_case[0];
  let amount = test_case[1];
  let solution = test_case[2];
  let output = coin_change(arr, amount);
  if (output == solution){
    console.log('Pass');
  }else{
    console.log('Fail');
  }
}
let arr = [1, 2, 5];
let amount = 11;
let solution = 3;
let test_case = [arr, amount, solution];
test_function(test_case);
// arr = [1,4,5,6];
// amount = 23;
// solution = 4;
// test_case = [arr, amount, solution];
// test_function(test_case);
// arr = [5,7,8];
// amount = 2;
// solution = -1;
// test_case = [arr, amount, solution];
// test_function(test_case);
