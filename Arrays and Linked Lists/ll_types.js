class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
  constructor(){
    this.head = null;
  }
  append(value) {
    if (this.head == null){
      this.head = new Node(value);
      return;
    }
    var node = this.head;
    while (node.next){
      node = node.next;
    }
    node.next = new Node(value);
    return;
  }
  to_list(){
    var list = [];
    var node = this.head;
    list.push(node.value);
    while (node.next) {
      node = node.next;
      list.push(node.value);
    }
    return list;
  }
}
var ll = new LinkedList();
ll.append(1);
ll.append(2);
ll.append(4);
var node = ll.head;
while (node){
  console.log(node.value);
  node = node.next;
}
console.log(ll.to_list());
class DoubleNode{
  constructor(value){
    this.value = value;
    this.next = null;
    this.previous = null;
  }
}
class DoublyLinkedList {
  constructor(){
    this.head = null;
    this.tail = null;
  }
  append(value){
    if (this.head == null){
      this.head = new DoubleNode(value);
      this.tail = this.head;
    }
    else{
      var new_n = new DoubleNode(value);
      this.tail.next = new_n;
      new_n.previous = this.tail;
      this.tail = new_n;
    }
    return;
  }
}
ll = new DoublyLinkedList();
ll.append(1)
ll.append(-2)
ll.append(4)
var node = ll.head;
while (node){
  console.log(node.value);
  node = node.next;
}
node = ll.tail
while (node){
  console.log(node.value);
  node = node.previous;
}
