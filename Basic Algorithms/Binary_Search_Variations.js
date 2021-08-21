function recursive_binary_search(target, array, left=0){
  if (array.length == 0){
    return null;
  }
  let center = Math.floor((array.length-1)/2);
  if(array[center] == target){
    return center+left;
  } else if (array[center] < target) {
    return recursive_binary_search(target, array.slice(center+1), left+center+1);
  } else {
    return recursive_binary_search(target, array.slice(0, center), left);
  }
}
let result = recursive_binary_search(7, [1, 3, 5, 7, 7, 7, 8, 11, 12]);
console.log(result); // 4 (not the first element)

function find_first(target, source){
  let index = recursive_binary_search(target, source);
  if (!index){
    return null;
  }
  while(source[index] == target){
    if (index == 0){
      return 0;
    }
    if(source[index-1] == target){
      index -= 1;
    } else{
      return index;
    }
  }
}
let ff = find_first(7, [1, 3, 5, 7, 7, 7, 8, 11, 12]);
console.log(ff); // 3
ff = find_first(9, [1, 3, 5, 7, 7, 7, 8, 11, 12]);
console.log(ff); // null

function contains(target, source){
  return recursive_binary_search(target, source) != null;
}
let letters = ['a', 'c', 'd', 'f', 'g'];
console.log(contains('a', letters));
console.log(contains('b', letters));

function contains_native(target, source){
  if(source.length == 0){
    return false;
  }
  let center = Math.floor((source.length-1)/2);
  if(source[center] == target){
    return true;
  } else if (source[center] < target) {
    return contains(target, source.slice(center+1));
  } else{
    return contains(target, source.slice(0, center));
  }
}
letters = ['a', 'c', 'd', 'f', 'g'];
console.log(contains('c', letters));
console.log(contains('b', letters));
