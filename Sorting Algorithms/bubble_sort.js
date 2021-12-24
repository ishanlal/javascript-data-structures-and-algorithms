// Efficency: O(n^2)
// Space: O(1)
const ld = require('lodash');
function bubble_sort_1(arr){
  for (let i = 0 ; i<arr.length ; i++){
    for(let j = 1 ; j<arr.length ; j++){
      let curr = arr[j];
      let prev = arr[j-1];
      if(prev <= curr){
        continue;
      }
      arr[j] = prev;
      arr[j-1] = curr;
    }
  }
}
let wakeup_times = [16,49,3,12,56,49,55,22,13,46,19,55,46,13,25,56,9,48,45];
bubble_sort_1(wakeup_times);
console.log(wakeup_times[0] == 3);



function bubble_sort_2(arr){
  for (let i = 0 ; i<arr.length ; i++){
    for(let j = 1 ; j<arr.length ; j++){
      let [curr_hour, curr_min] = arr[j];
      let [prev_hour, prev_min] = arr[j-1];
      if((prev_hour > curr_hour) || ((prev_hour == curr_hour) && prev_min>curr_min)){
        continue;
      }
      arr[j] = [prev_hour,prev_min];
      arr[j-1] = [curr_hour,curr_min];
    }
  }
}
let sleep_times = [[24,13], [21,55], [23,20], [22,5], [24,23], [21,58], [24,3]];
bubble_sort_2(sleep_times);
let r = ld.isEqual(sleep_times, [[24,23], [24,13], [24,3], [23,20], [22,5], [21,58], [21,55]]);
console.log(r);
