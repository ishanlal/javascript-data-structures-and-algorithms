class Node{
  constructor(value){
    this.value = value;
    this.next = null;
  }
}
class Stack{
  constructor(){
    this.head = null;
    this.num_elements = 0;
  }
  push(value){
    let new_node = new Node(value);
    if (this.head == null){
      this.head = new_node;
    }
    else{
      new_node.next = this.head;
      this.head = new_node;
    }
    this.num_elements += 1;
  }
  size(){
    return this.num_elements;
  }
  is_empty(){
    return this.num_elements == 0;
  }
  pop(){
    if(this.is_empty()){
      return;
    }
    let value = this.head.value;
    this.head = this.head.next;
    this.num_elements -= 1;
    return value;
  }
}
let a = new Stack();
a.push(10);
a.push(20);
a.push(30);
a.push(40);
a.push(50);
let b = a.size();
let c = a.is_empty();
let d = a.pop();
console.log(d);
