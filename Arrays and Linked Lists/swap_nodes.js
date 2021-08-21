class Node{
  constructor(data){
    this.data = data;
    this.next = null;
  }
}
function create_ll(arr){
  if (arr.length == 0){
    return null;
  }
  let head = new Node(arr[0]);
  let tail = head;
  for (let i = 1 ; i<arr.length ; i++){
    tail.next = new Node(arr[i]);
    tail = tail.next;
  }
  return head;
}
function swap_nodes(head, pos_one, pos_two){
if(pos_one == pos_two){
  return head;
}

let one_curr = null;
let one_previous = null;
let two_curr = null;
let two_previous = null;
let current_index = 0;
let current_node = head;
let new_head = null;

while (current_node != null){
  // find current and previous nodes
  if (current_index == pos_one){
    one_curr = current_node;
  }
  else if (current_index == pos_two){
    two_curr = current_node;
    break;
  }
  if (one_curr == null) {
    one_previous = current_node;
  }
  two_previous = current_node;
  current_node = current_node.next;
  current_index += 1;
}
// swapping logic
two_previous.next = one_curr;
let temp = one_curr.next;
one_curr.next = two_curr.next;
two_curr.next = temp;

if (one_previous == null){
  new_head = two_curr;
}else{
  one_previous.next = two_curr;
  new_head = head;
}
return new_head;
}
let results = swap_nodes(create_ll([3, 4, 5, 2, 6, 1, 9]), 3, 4);
console.log(JSON.stringify(results));
