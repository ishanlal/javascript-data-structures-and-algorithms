const lodash = require('lodash');
function permutation(input_list){
  let ret_list = [];
  if(input_list.length == 0){
    ret_list.push([]);
  } else{
  let first_element = input_list[0];
  console.log('fE: ', first_element);
  let rest_list = input_list.slice(1);
  console.log('remaining list: ', rest_list);
  let subList = permutation(rest_list);
  console.log('subList: ', subList);
  for (let aList of subList){
    console.log('aList: ', aList);
    for(let j = 0; j<(aList.length+1) ;j++){
      let bList = lodash.cloneDeep(aList);
      console.log('bList: ', bList);
      bList.splice(j, 0, first_element);
      ret_list.push(bList);
    }
  }
}
  return ret_list;
}

let results = permutation([0, 1, 2]);
console.log(results);
let list1 = [0, 1, 2];
let list2 = [7, 8, 9];
let cl1 = [list1, list2];
let cl2 = cl1;
// Assignment operation - points a new reference to the existing object
console.log(cl1 == cl2); // True cl2 is same object as cl1
console.log(cl1[0] == cl2[0]); // True cl2[0] is same object as cl1[0]
// Shallow Copy
cl2 = lodash.clone(cl1);
console.log(cl1 == cl2); // False cl2 is now a new object
console.log(cl1[0] == cl2[0]); // True cl2[0] is same object as cl1[0]
// Deep Copy
cl2 = lodash.cloneDeep(cl1);
console.log(cl1 == cl2); // False cl2 is now a new object
console.log(cl1[0] == cl2[0]); // False cl2[0] is now a new object
