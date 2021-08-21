class Node{
  constructor(value){
    this.value = value;
    this.next = null;
  }
}
class LinkedList{
  constructor (head) {
    this.head = head;
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

function merge(list1, list2){
  let ret_ll = new LinkedList(null);
  if (list1 == null){
    return list2;
  }
  if (list2 == null){
    return list1;
  }
  let L1 = list1.head;
  let L2 = list2.head;
  while (L1 != null || L2 != null){
    if (L1 == null){
      ret_ll.append(L2.value);
      L2 = L2.next;
    }else if (L2 == null) {
      ret_ll.append(L1.value);
      L1 = L1.next;
    } else if (L1.value <= L2.value) {
      ret_ll.append(L1.value);
      L1 = L1.next;
    } else {
      ret_ll.append(L2.value);
      L2 = L2.next;
    }
  }
  return ret_ll;
}
class NestedLinkedList{
  constructor(head){
    this.head = head;
  }
  flatten(){
    return this._flatten(this.head);
  }
  _flatten(node){
    if (node.next == null) {
      return merge(node.value, null);
    }
    return merge(node.value, this._flatten(node.next));
  }
  append(value){
    if (this.head == null) {
      this.head = value;
      return;
    }
  let ll = this.head;
  while (ll.next){
    ll = ll.next;
  }
  ll.next = value;
}
}
// Test Merge function
let linked_list = new LinkedList(new Node(1));
linked_list.append(3);
linked_list.append(5);

let second_linked_list = new LinkedList(new Node(2));
second_linked_list.append(4);

let merged = merge(linked_list, second_linked_list);
let node = merged.head;
while (node) {
  console.log(node.value);
  node = node.next;
}

merged = merge(null, linked_list);
node = merged.head;
while (node != null){
  console.log(node.value);
  node = node.next;
}
// Test Flatten function
console.log('Flatten test')
console.log(linked_list);
console.log(second_linked_list);
nested_linked_list = new NestedLinkedList(new Node(linked_list));
nested_linked_list.append(new Node(second_linked_list));
let flattened = nested_linked_list.flatten();

node = flattened.head;
while (node != null){
  console.log(node.value);
  node = node.next;
}
