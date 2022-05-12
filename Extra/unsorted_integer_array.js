function get_min_max(int_list){
  let min_value = int_list[0];
  let max_value = int_list[0];
  for(let i = 0; i<int_list.length;i++) {
    if(int_list[i]>max_value) {
      max_value = int_list[i];
    } else if (int_list[i]<min_value) {
      min_value = int_list[i];
    }
  }
  return [min_value, max_value];
}

let results = get_min_max([9, 5, 4, 1, 7, 8, 3, 2, 6, 10]);
console.log(results);

// Example Test Case of Ten Integers
//import random
//l = [i for i in range(0, 10)]  # a list containing 0 - 9
//random.shuffle(l)
//print ("Pass" if ((0, 9) == get_min_max(l)) else "Fail")
//egde case 1: large list
//edge_1 = [i for i in range(200,2000)]
//random.shuffle(edge_1)
//print ("Pass" if ((200, 1999) == get_min_max(edge_1)) else "Fail")
//egde case 2: large list   with negative numbers
//edge_2 = [i for i in range(-20000000,-2000)]
//random.shuffle(edge_2)
//print ("Pass" if ((-20000000, -2001) == get_min_max(edge_2)) else "Fail")
