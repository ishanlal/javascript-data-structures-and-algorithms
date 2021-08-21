class Node{
  constructor(value){
    this.value = value;
    this.next = null;
  }
}
class LinkedList{
  constructor () {
    this.head = null;
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
let ll = new LinkedList();
ll.append(1);
ll.append(2);
ll.append(3);
ll.append(4);
ll.append(5);
console.log(ll.to_list());
function reverse(linked_list){
  let llll = new LinkedList();
  let prev = null;
  for (let i = 0; i<linked_list.length ;i++){
    let new_node = new Node(linked_list[i]);
    new_node.next = prev;
    prev = new_node;
  }
  llll.head = prev;
  return llll;
}
let l6 = reverse(ll.to_list());
console.log(l6.to_list());
