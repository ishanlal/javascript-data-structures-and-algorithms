function max_returns(arr){
  let min_price_index = 0;
  let max_price_index = 1;
  let current_min_price_index = 0;
  if(arr.length <2){
    return;
  }
  for(let i = 1;i<arr.length;i++){
    if (arr[i]<arr[current_min_price_index]){
      current_min_price_index = i;
    }
    if((arr[max_price_index]-arr[min_price_index]) < (arr[i]-arr[current_min_price_index])) {
      max_price_index = i;
      min_price_index = current_min_price_index;
    }
  }
  let max_profit = arr[max_price_index]-arr[min_price_index];
  return max_profit;
}
function test_function(test_case){
  let prices = test_case[0];
  let solution = test_case[1];
  let output = max_returns(prices);
  if (output == solution){
    console.log('Pass');
  }else{
    console.log('Fail');
  }
}
let prices = [2, 2, 7, 9, 9, 12, 18, 23, 34, 37, 45, 54, 78];
let solution = 76;
let test_case = [prices, solution];
test_function(test_case);
prices = [54, 18, 37, 9, 11, 48, 23, 1, 7, 34, 2, 45, 67];
solution = 66;
test_case = [prices, solution];
test_function(test_case);
prices = [78, 54, 45, 37, 34, 23, 18, 12, 9, 9, 7, 2, 2]
solution = 0
test_case = [prices, solution]
test_function(test_case)
