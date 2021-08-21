function power_of_2(n){
  if (n == 0){
    return 1;
  }
  return 2*power_of_2(n-1);
}
console.log(power_of_2(5));

function sum_integers(n){
  if (n == 1){
    return 1;
  }
  return n+sum_integers(n-1);
}
console.log(sum_integers(3));

//Polynomial Time
function sum_array(array){
  if(array.length == 1){
    return array[0];
  }
  return array[0]+sum_array(array.slice(1));
}
console.log(sum_array([1, 2, 3, 4]));

//Linear Time
function sum_array_index(array, index){
  // Base Case
  if (array.length-1 == index){
    return array[index];
  }
  return array[index] + sum_array_index(array, index + 1);
}
console.log(sum_array_index([1, 2, 3, 4], 0));

function sum_array_iter(array){
  let result = 0;
  for (let x of array){
    result += x;
  }
  return result;
}
console.log(sum_array_iter([1, 2,3,4 ]));
