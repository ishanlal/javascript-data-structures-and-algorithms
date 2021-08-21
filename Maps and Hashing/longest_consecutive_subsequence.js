function longest_consecutive_subsequence(input_list){
  let element_dict = {};
  for(let [index, element] of Object.entries(input_list)){
    element_dict[element] = index;
  }
  let max_length = -1; // represents length of longest subsequence
  let starts_at = -1; //represents index of smallest element in longest subsequence
  for(let [index, element] of Object.entries(input_list)){
    let current_starts = index;
    element_dict[element] = -1; // Mark as visited
    let current_count = 1; // Length of current subsequence
    // CHECK ONE ELEMENT FORWARD
    let current = element+1; // Expected number
    while (element_dict[current] && (element_dict[current]>0)){
      current_count += 1; // increment length of subsequence
      element_dict[current] = -1; // Mark as visited
      current += 1;
    }
    // CHECK ONE ELEMENT BACKWARD
    current = element-1; // Expected number
    while (element_dict[current] && (element_dict[current]>0)){
      current_starts = element_dict[current]; // index of the smallest element in the current subsequence
      current_count += 1; // increment length of subsequence
      element_dict[current] = -1; // Mark as visited
      current -= 1;
    }
    // If length of current subsequence >= max_length of previously visited subsequence;
    if (current_count >= max_length){
      if(current_count == max_length && (current_starts>starts_at)){
        continue;
      }
      starts_at = current_starts; // longest so far sequence
      max_length = current_count; // longest so far sequence
    }
  }
  let start_element = input_list[starts_at];
  let new_list = [];
  for(let i = start_element;i<(start_element+max_length); i++){
    if(input_list.includes(i)){
      new_list.push(i);
    }
  }
  return new_list;
}
console.log(longest_consecutive_subsequence([5, 4, 7, 10, 1, 3, 55, 2])); // [1, 2, 3, 4, 5]
console.log(longest_consecutive_subsequence([0, 1, 2, 3, 4])); // [0, 1, 2, 3, 4]
console.log(longest_consecutive_subsequence([2, 12, 9, 16, 10, 5, 3, 20, 25, 11, 1, 8, 6 ])); // [8, 9, 10, 11, 12]
