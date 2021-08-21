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
  constructor(){
    this.root = null;
  }
  set_root(value){
    this.root = new Node(value);
  }
  get_root(){
    return this.root;
  }
  compare(node, new_node){
    // 0 means new_node equals node
    // -1 means new_node less than node
    // 1 means new_node greater than node
    if (new_node.get_value() == node.get_value()){
      return 0;
    } else if (new_node.get_value() < node.get_value()) {
      return -1;
    } else {
      return 1;
    }
  }
  insert_with_loop(new_value){
    let new_node = new Node(new_value);
    let node = this.get_root();
    if (node == null){
      this.root = new_node;
      return;
    }
    while(true){
      let comp = this.compare(node, new_node);
      if (comp == 0){
        node.set_value(new_node.get_value());
        break;
      } else if (comp == -1) {
        if (node.has_left_child()){
          node = node.get_left_child();
        }else {
          node.set_left_child(new_node);
          break;
        }
      } else {
        if (node.has_right_child()){
          node = node.get_right_child();
        }else {
          node.set_right_child(new_node);
          break;
        }
      }
    }
  }
  insert_with_recursion(new_value){
    if(this.get_root() == null){
      this.root = new Node(new_value);
      return;
    }
    this.insert_recursively(this.get_root(), new Node(new_value));
  }
  insert_recursively(node, new_node){
    let comp = this.compare(node, new_node);
    if( comp == 0 ){
      node.set_value(new_node.get_value());
    } else if ( comp == -1 ) {
      if (node.has_left_child()){
        this.insert_recursively(node.get_left_child(), new_node);
      } else {
        node.set_left_child(new_node);
      }
    } else {
      if(node.has_right_child()){
        this.insert_recursively(node.get_right_child(), new_node)
      } else {
        node.set_right_child(new_node);
      }
    }
  }
  minValueNode(node){
    let curr = node;
    while(curr.has_left_child()){
      curr = curr.get_left_child();
    }
    return curr;
  }
  delete(value){
    if(this.get_root() == null){
      return this.get_root();
    }
    this.delete_recursively(this.get_root(), new Node(value));
  }
  delete_recursively(node, new_node){
    let comp = this.compare(node, new_node);
    if ( comp == 0 ){
      // this node needs to be deleted
      if(!node.has_left_child()){
        let temp = node.get_right_child();
        node = null;
        return temp;
      } else if(!node.has_right_child()){
        let temp = node.get_left_child();
        node = null;
        return temp;
      }
        let temp = this.minValueNode(node.get_right_child());
        node.set_value(temp.get_value());
        node.set_right_child(this.delete_recursively(node.get_right_child(), temp));
    }
    else if (comp == -1) {
      node.set_left_child(this.delete_recursively(node.get_left_child(), new_node));
    }
    else{
      node.set_right_child(this.delete_recursively(node.get_right_child(), new_node));
    }
    return node;
  }
  search(value){
    let node = this.get_root();
    let s_node = new Node(value);
    while(true){
      let comp = this.compare(node, s_node);
      if ( comp == 0 ){
        return true;
      } else if (comp == -1) {
        if (node.has_left_child()){
          node = node.get_left_child();
        }
        else{
          return false;
        }
      }
      else{
        if (node.has_right_child()){
          node = node.get_right_child();
        }
        else{
          return false;
        }
      }
    }
  }
}
// Build Tree
let tree = new Tree();
tree.insert_with_loop(5);
tree.insert_with_loop(6);
tree.insert_with_loop(4);
tree.insert_with_loop(2);
tree.insert_with_loop(5);
console.log(tree.search(8));
console.log(tree.search(2));
console.log(JSON.stringify(tree));
let tree2 = new Tree();
tree2.insert_with_recursion(5);
tree2.insert_with_recursion(6);
tree2.insert_with_recursion(4);
tree2.insert_with_recursion(2);
tree2.insert_with_recursion(5);
console.log(tree2.search(8));
console.log(tree2.search(2));
console.log(JSON.stringify(tree2));
let tree3 = new Tree();
tree3.insert_with_recursion(50);
tree3.insert_with_recursion(30);
tree3.insert_with_recursion(20);
tree3.insert_with_recursion(40);
tree3.insert_with_recursion(70);
tree3.insert_with_recursion(60);
tree3.insert_with_recursion(80);
console.log(JSON.stringify(tree3));
console.log(tree3.delete(20));
console.log(JSON.stringify(tree3));
console.log(tree3.delete(30));
console.log(JSON.stringify(tree3));
console.log(tree3.delete(50));
console.log(JSON.stringify(tree3));
