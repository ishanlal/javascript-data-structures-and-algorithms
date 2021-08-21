class Node{
  constructor(value){
    this.value = value;
    this.next = null;
  }
}
class LinkedList{
  constructor (init_list) {
    this.head = null;
    if (init_list){
      for (let i = 0; i<init_list.length ;i++){
        this.append(init_list[i]);
      }
    }
  }
  append(value){
    if (this.head == null) {
      this.head = new Node(value);
      return;
    }
  let node = this.head;
  while (node.next){
    node = node.next;
  }
  node.next = new Node(value);
}
to_list(){
  let out = [];
  let node = this.head;
  while (node){
    out.push(node.value);
    node = node.next;
  }
  return out;
}
}
function build_list(){
let list_with_loop = new LinkedList([2, -1, 3, 0, 5]);
let loop_start = list_with_loop.head.next;
let node = list_with_loop.head;
while (node.next){
  node = node.next;
}
node.next = loop_start;
return list_with_loop;
}
function iscircular(linked_list){
  if (linked_list.head == null){
    return false;
  }
  let slow = linked_list.head;
  let fast = linked_list.head;
  while (fast.next && fast) {
    fast = fast.next.next;
    slow = slow.next;
    if (slow == fast) {
      return true;
    }
  }
  return false;
}
let list_with_loop = build_list(); //list with loop
let list_without_loop = new LinkedList([1, 2, 3, 4, 5]);
console.log(iscircular(list_with_loop));
console.log(iscircular(list_without_loop));
