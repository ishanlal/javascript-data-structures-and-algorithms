class Queue{
  constructor(){
    this.storage = [];
  }
  size(){
    return this.storage.length;
  }
  enqueue(item){
    return this.storage.push(item);
  }
  dequeue(){
    return this.storage.shift();
  }
}
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
// Build Tree
let tree1 = new Tree('apple');
let node2 = new Node('banana');
let node3 = new Node('cherry');
let node4 = new Node('dates');
tree1.get_root().set_left_child(node2);
tree1.get_root().set_right_child(node3);
tree1.get_root().get_left_child().set_left_child(node4);
// BFS Algorithm
function bfs(tree){
  let q = new Queue();
  let visit_order = [];
  let root = tree.get_root();
  q.enqueue(root);
  while (q.size() > 0){
    let node = q.dequeue();
    visit_order.push(node.get_value());
    if (node.has_left_child()){
      q.enqueue(node.get_left_child());
    }
    if(node.has_right_child()){
      q.enqueue(node.get_right_child());
    }
  }
  return visit_order;
}
console.log(bfs(tree1));
