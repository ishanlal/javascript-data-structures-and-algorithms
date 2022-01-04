var assert = require('assert');
function knapsack_max_value(knapsack_max_weight, items){
  let lastIndex = items.length-1;
  return knapsack_recursive(knapsack_max_weight, items, lastIndex);
}
function knapsack_recursive(capacity, items, lastIndex){
  if(capacity <=0 || lastIndex<0){
    return 0;
  }
  let valueA = 0;
  if(items[lastIndex]['weight'] <= capacity){
    valueA = items[lastIndex]['value'] + knapsack_recursive(capacity-items[lastIndex]['weight'], items, lastIndex-1);
  }
  let valueB = knapsack_recursive(capacity, items, lastIndex-1);
  console.log(valueA, valueB);
  return Math.max(valueA, valueB);
}
let tests = [{
'correct_output': 14,
'input': {
'knapsack_max_weight': 15,
'items': [{'weight':10, 'value':7}, {'weight':9, 'value':8}, {'weight':5, 'value':6}]
}
},
{
  'correct_output': 13,
  'input': {
  'knapsack_max_weight': 25,
  'items': [{'weight':10, 'value':2}, {'weight':29, 'value':10}, {'weight':5, 'value':7}, {'weight':5, 'value':3}, {'weight':5, 'value':1}, {'weight':24, 'value':12}]
  }
}]
for(let test of tests){
  assert(test['correct_output'] == knapsack_max_value(test['input']['knapsack_max_weight'], test['input']['items']));
}
