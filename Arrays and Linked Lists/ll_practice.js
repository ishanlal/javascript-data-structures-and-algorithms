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
LinkedList.prototype.prepend = function (value){
  let new_node = new Node(value);
  new_node.next = this.head;
  this.head = new_node;
}
let ll = new LinkedList();
ll.prepend(1);
LinkedList.prototype.append = function(value){
  if (this.head == null) {
    this.head = new Node(value);
    return;
  }
  else{
    let node = this.head;
    while (node.next){
      node = node.next;
    }
    node.next = new Node(value);
    return;
  }
}
ll.append(3);
ll.prepend(2);
ll.append(1);
ll.append(3);
console.log(ll.to_list());
LinkedList.prototype.search = function(value){
  let node = this.head;
  if (node.value == value){
    return node;
  }
  else{
    while (node.next) {
      if (node.next == value){
        return node;
      }
      node = node.next;
    }
  }
}
ll.prepend(2);
ll.prepend(1);
ll.append(4);
ll.append(3);
ll.search(1);
ll.search(4);
LinkedList.prototype.remove = function(value){
  let node = this.head;
  if (node.value == value){
    this.head = node.next;
    return;
  }
  else{
    node = this.head;
    prev = new Node(null);
    while (node.next) {
      if (node.value == value) {
        prev.next = node.next;
        return;
      }
      prev = node;
      node = node.next;
    }
    if (node.value == value) {
      prev.next = null;
      return;
    }
  }
}
ll.remove(1);
ll.remove(3);
ll.remove(3);
LinkedList.prototype.pop = function () {
  let ret_value = this.head.value;
  if (this.head.next) {
    this.head = this.head.next;
  }
  return ret_value;
}
ll.pop();
LinkedList.prototype.insert = function (value, pos) {
  if (this.head == null){
    this.head = new Node(value);
    return;
  }
  if (pos == 0) {
    this.prepend(value);
    return;
  }
  let index = 0;
  let node = this.head;
  while (node.next && index <=pos) {
    if ((pos - 1) == index){
      let new_node = new Node(value);
      new_node.next = node.next;
      node.next = new_node;
      return;
    }
    index = index + 1;
    node = node.next;
  }
  this.append(value);
}
console.log('before: ', ll.to_list());
ll.insert(5, 0);
ll.insert(2, 1);
ll.insert(3, 6);
console.log('after: ', ll.to_list());
LinkedList.prototype.size = function (){
  let length = 0;
  let node = this.head;
  while (node) {
    length += 1;
    node = node.next;
  }
  console.log('size: ', length);
  return length;
}
ll.size();
