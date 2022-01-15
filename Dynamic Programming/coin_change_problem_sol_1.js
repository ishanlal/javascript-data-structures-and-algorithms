function coin_change(coins, amount){
  let memo = {};

  function return_change (remaining){
    //console.log('remaining: ', remaining);
    if (remaining<0){
      return Infinity;
    }
    if(remaining == 0){
      return 0;
    }

    if (!Object.keys(memo).includes(remaining)){
      let saved_val = [];
      //console.log('coins: ', coins);
      for(let c of coins){
        saved_val.push(return_change(Number(remaining)-Number(c))+1);
      }
      //console.log(saved_val);
      memo[remaining] = Math.min(...saved_val);
    }
    //console.log('memo: ', memo);
    return memo[remaining];
  }

  let res = return_change(amount);
  //console.log('res: ', res);
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
  //console.log(arr, amount);
  let output = coin_change(arr, amount);
  //console.log(output);
  if (output == solution){
    console.log('Pass');
  }else{
    console.log('Fail');
  }
}
let arr = [1, 2, 3];
let amount = 6;
let solution = 2;
let test_case = [arr, amount, solution];
test_function(test_case);
arr = [1, 2, 5];
amount = 11;
solution = 3;
test_case = [arr, amount, solution];
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
