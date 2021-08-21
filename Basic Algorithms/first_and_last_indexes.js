function first_and_last_index(arr, number){
  let first_index = find_start_index(arr, number, 0, arr.length-1);
  let last_index = find_end_index(arr, number, 0, arr.length-1);
  return [first_index, last_index];
}

function find_start_index(arr, number, start_index, end_index){
  if (start_index > end_index){
    return -1;
  }
  //let mid_index = Math.floor((start_index+end_index)/2);
  let mid_index = start_index+Math.floor((end_index-start_index)/2);
  if (arr[mid_index] == number){
    let current_start_pos = find_start_index(arr, number, start_index, mid_index-1);
    let start_pos;
    if (current_start_pos != -1){
      start_pos = current_start_pos;
    } else{
      start_pos = mid_index;
    }
    return start_pos;
  } else if (arr[mid_index] < number) {
    return find_start_index(arr, number, mid_index+1, end_index);
  } else {
    return find_start_index(arr, number, start_index, mid_index-1);
  }
}

function find_end_index(arr, number, start_index, end_index){
  if (start_index > end_index){
    return -1;
  }
  //let mid_index = Math.floor((start_index+end_index)/2); // works but there is an alternative
  let mid_index = start_index + Math.floor((end_index-start_index)/2);

  if(arr[mid_index] == number){
    let current_end_pos = find_end_index(arr, number, mid_index+1, end_index);
    let end_pos;
    if(current_end_pos != -1){
      end_pos = current_end_pos;
    } else {
      end_pos = mid_index;
    }
    return end_pos;
  } else if (arr[mid_index] < number) {
    return find_end_index(arr, number, mid_index+1, end_index);
  } else {
    return find_end_index(arr, number, start_index, mid_index-1);
  }
}

let results = first_and_last_index([1], 1);
console.log(results);

results = first_and_last_index([0, 1, 2, 3, 3, 3, 3, 4, 5, 6], 3);
console.log(results);

results = first_and_last_index([0, 1, 2, 3, 4, 5], 5);
console.log(results);

results = first_and_last_index([0, 1, 2, 3, 4, 5], 6);
console.log(results);
