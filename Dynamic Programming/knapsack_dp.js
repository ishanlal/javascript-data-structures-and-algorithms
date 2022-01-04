var assert = require('assert');
function knapsack_max_value(knapsack_max_weight, items){
  let lookup_table = Array(knapsack_max_weight+1).fill(0);
  for(let item of items){
    for(let capacity = knapsack_max_weight; capacity >= 0 ;capacity--){
      if(item['weight'] <= capacity){
        lookup_table[capacity] = Math.max(lookup_table[capacity], lookup_table[capacity-item['weight']]+item['value']);
      }
    }
  }
  console.log(lookup_table);
  return lookup_table[lookup_table.length-1];
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
