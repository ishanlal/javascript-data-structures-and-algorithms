class Node{
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
  get_value(){
    return this.value;
  }
  set_value(value){
    this.value = value;
  }
  get_right_child(){
    return this.right;
  }
  set_right_child(node){
    this.right = node;
  }
  get_left_child(){
    return this.left;
  }
  set_left_child(node){
    this.left = node;
  }
  has_left_child(){
    return (this.left != null);
  }
  has_right_child(){
    return (this.right != null);
  }
}
class Tree{
  constructor(value){
    this.root = new Node(value);
  }
  get_root(){
    return this.root;
  }
}

let node1 = new Node('apple');
let node2 = new Node('banana');
let node3 = new Node('orange');
node1.set_left_child(node2);
node1.set_right_child(node3);
let a = node1.has_left_child();
let b = node1.has_right_child();
console.log(a, b);
