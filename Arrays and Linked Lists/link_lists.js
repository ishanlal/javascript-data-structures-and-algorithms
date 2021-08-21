// Node Class
class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}
// create a few nodes
let head = new Node(2);
head.next = new Node(1);
console.log(head.value);
console.log(head.next.value);
// Print Link List
function print_ll(head){
  let current = head;
  while (current != null) {
    console.log(current.value);
    current = current.next;
  }
}
print_ll(head);
// Create Link List
function create_link_list(input_list){
  let head = null;
  for (let i = 0; i<input_list.length ;i++){
    if (head == null){
      head = new Node(input_list[i]);
    }
    else{
      cur_node = head;
      while (cur_node.next){
        cur_node = cur_node.next;
      }
      cur_node.next = new Node(input_list[i]);
    }
  }
  return head;
}
head = create_link_list([1, 2, 3, 4, 5, 6]);
console.log(head);
// Efficient LL creation
function create_linked_list_better(input_list){
  let head = null;
  let tail = null;
  for (let i = 0 ; i<input_list.length ; i++){
    if (head == null){
      head = new Node(input_list[i]);
      tail = head;
    }
    else{
      tail.next = new Node(input_list[i]);
      tail = tail.next;
    }
  }
  return head;
}
head = create_linked_list_better([1, 2, 3, 4, 5, 6]);
console.log(head);
