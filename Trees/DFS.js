class Stack{
  constructor(){
    this.items = [];
  }
  size(){
    return this.items.length;
  }
  push(item){
    this.items.push(item);
  }
  pop(){
    if (this.size() == 0){
      return null;
    }
    else{
      return this.items.pop();
    }
  }
  top(){
    if(this.items.length > 0){
      return this.items[this.items.length-1];
    }else{
      return null;
    }
  }
}
class State{
  constructor(node){
    this.node = node;
    this.visited_left = false;
    this.visited_right = false;
  }
  get_node(){
    return this.node;
  }
  get_visited_left(){
    return this.visited_left;
  }
  get_visited_right(){
    return this.visited_right;
  }
  set_visited_left(){
    this.visited_left = true;
  }
  set_visited_right(){
    this.visited_right = true;
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
// pre-order using Stack and tracking state
function pre_order_with_stack(tree){
  let visit_order = [];
  let stack = new Stack();
  let node = tree.get_root();
  visit_order.push(node.get_value());
  let state = new State(node);
  stack.push(state);
  let count = 0;
  while(node){
    count = count + 1;
    if (node.has_left_child() && !(state.get_visited_left()) ){
      state.set_visited_left();
      node = node.get_left_child();
      visit_order.push(node.get_value());
      state = new State(node);
      stack.push(state);
    }else if (node.has_right_child() && !(state.get_visited_right()) ){
      state.set_visited_right();
      node = node.get_right_child();
      visit_order.push(node.get_value());
      state = new State(node);
      stack.push(state);
    } else{
      stack.pop();
      if(stack.size() != 0){
        state = stack.top();
        node = state.get_node();
      }
      else{
        node = null;
      }
    }
  }
  return visit_order;
}
console.log(pre_order_with_stack(tree1));
// Pre-order
function pre_order(tree){
    let root = tree.get_root();
    let visit_order = [];
    function traverse(node){
      if (node){
        visit_order.push(node.get_value());
        traverse(node.get_left_child());
        traverse(node.get_right_child());
      }
    }
    traverse(root);
    return visit_order;
}
console.log(pre_order(tree1));
// In-order
function in_order(tree){
    let root = tree.get_root();
    let visit_order = [];
    function traverse(node){
      if (node){
        traverse(node.get_left_child());
        visit_order.push(node.get_value());
        traverse(node.get_right_child());
      }
    }
    traverse(root);
    return visit_order;
}
console.log(in_order(tree1));
// Post-order
function post_order(tree){
    let root = tree.get_root();
    let visit_order = [];
    function traverse(node){
      if (node){
        traverse(node.get_left_child());
        traverse(node.get_right_child());
        visit_order.push(node.get_value());
      }
    }
    traverse(root);
    return visit_order;
}
console.log(post_order(tree1));
