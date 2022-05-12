function rotated_array_search(input_list, number){
  let key = number;
  let start = 0;
  let end = input_list.length-1;
  return fast_search(input_list, start, end, key);
}

function fast_search(arr, start, end, key){
  if (start>end){
    return -1;
  }
  let mid_num = Math.floor((start+end)/2);
  if(arr[mid_num] == key){
    return mid_num;
  }
  // if array is already sorted just search for the key...
  if (arr[start] <= arr[mid_num]){
    if(key>=arr[start] && key<=arr[mid_num]){
      return fast_search(arr, start, mid_num-1, key);
    }
    return fast_search(arr, mid_num+1, end, key);
  }
  // pivot encountered, search the other half of the array...
  if (key >= arr[mid_num] && key <=arr[end]){
    return fast_search(arr, mid_num+1, end, key);
  }
  return fast_search(arr, start, mid_num-1, key);
}

function linear_search(input_list, number) {
  for (let [index, element] of Object.entries(input_list)){
    if(element == number){
      return index;
    }
  }
  return -1;
}

function test_function(test_case){
  let input_list = test_case[0];
  let number = test_case[1];
  if(linear_search(input_list, number) == rotated_array_search(input_list, number)){
    console.log('pass');
  }else{
    console.log(linear_search(input_list, number));
    console.log(rotated_array_search(input_list, number));
    console.log('fail');
  }
}

test_function([[6, 7, 8, 9, 10, 1, 2, 3, 4], 6]);

test_function([[6, 7, 8, 9, 10, 1, 2, 3, 4], 1]);

test_function([[6, 7, 8, 1, 2, 3, 4], 8]);

test_function([[6, 7, 8, 1, 2, 3, 4], 1]);

test_function([[6, 7, 8, 1, 2, 3, 4], 10])

// edge test 1 empty string
test_function([[], 1]);
// edge test 2  large list
//test_list=[i for i in range (1011,10000)]+[i for i in range (0,1011)];
//test_function([test_list, 6])
//egde test 3  large list with negative numbers
//test_list=[i for i in range (1011,10000)]+[i for i in range (-1000,1011)]
//print (test_list)
//test_function([test_list, -60])
