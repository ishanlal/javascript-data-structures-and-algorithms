function pair_sum_to_target(input_list, target){
  let index_dict = {}; // element of input list becomes key, index of input list becomes value
  for (let [index, element] of Object.entries(input_list)){ // traverse once through the input list.
    if(index_dict[target-element]){ // If key exists in the dictionary
      return [index_dict[target-element], index]; // return the list of indicies.
    }
    index_dict[element] = index;
  }
  return [-1,-1];
}

console.log(pair_sum_to_target([1, 5, 9, 7], 8)); // [0,3]
console.log(pair_sum_to_target([10, 5, 9, 8, 12, 1, 16, 6], 16)); // [0,7]
console.log(pair_sum_to_target([0, 1, 2, 3, -4], -4)); // [0,4]
