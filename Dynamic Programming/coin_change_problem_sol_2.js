function coin_change(coins, amount){
  let res = Array(amount+1).fill(Infinity);
  res[0] = 0;
  let i = 0;
  while (i<amount){
    if(res[i] != Infinity){
      for (coin of coins){
        if (i<=amount-coin){
          res[i+coin] = Math.min(res[i]+1, res[i+coin]);
        }
      }
    }
    i += 1;
  }
  if(res[amount] == Infinity){
    return -1;
  }
  return res[amount];
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
arr = [1,4,5,6];
amount = 23;
solution = 4;
test_case = [arr, amount, solution];
test_function(test_case);
arr = [5,7,8];
amount = 2;
solution = -1;
test_case = [arr, amount, solution];
test_function(test_case);
