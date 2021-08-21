let arr_1 = [1,2,3];
let arr_2 = [9,9,9];

function add_one(arr){
  let borrow = 1;
  for (let i = (arr.length-1); i >= 0 ;i--){
    let digit  = borrow + arr[i];
    borrow = Math.floor(digit/10);
    if (borrow == 0){
      arr[i] = digit;
      break;
    }else{
      arr[i] = digit%10;
    }
  }
  arr.unshift(borrow);
  let position = 0;
  while (arr[position] == 0){
    position +=1;
  }
  return arr.slice(position);
}
let result = add_one(arr_2);
console.log(result);
