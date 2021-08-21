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
class BinaryTreeNode{
  constructor (data){
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
function convert_arr_to_binary_tree(arr) {
  let index = 0;
  let length = arr.length;
  if (length <= 0 || arr[0] == -1){
    return null;
  }
  let root = new BinaryTreeNode(arr[index]);
  index = index +1;
  let queue = new Queue();
  queue.enqueue(root);
  while (queue.size() != 0){
    let current_node = queue.dequeue();
    let left_child = arr[index];
    index = index+1;
    if(left_child != null){
      let left_node = new BinaryTreeNode(left_child);
      current_node.left = left_node;
      queue.enqueue(left_node);
    }
    right_child = arr[index];
    index = index +1;
    if (right_child != null){
      let right_node = new BinaryTreeNode(right_child);
      current_node.right = right_node;
      queue.enqueue(right_node);
    }
  }
  return root;
}
function path_from_root_to_node(root, data){
  let output = path_from_node_to_root(root, data);
  if (output != null){
    return output.reverse();
  }
}
function path_from_node_to_root(root, data){
  if (root == null){
    return null;
  } else if(root.data == data){
    return [data];
  }
  let left_answer = path_from_node_to_root(root.left, data);
  if (left_answer != null) {
    left_answer.push(root.data);
    return left_answer
  }
  let right_answer = path_from_node_to_root(root.right, data);
  if (right_answer != null) {
    right_answer.push(root.data);
    return right_answer
  }
  return null;
}
let array1 = [1, 2, 3, 4, 5, null, null, null, null, null, null];
let array2 = [1, 2, 3, 4, null, 5, null, null, null, null, null];
let array3 = [1, 2, 3, null, null, 4, 5, 6, null, 7, 8, 9, 10, null, null, null, null, null, null, 11, null, null, null];
let root1 = convert_arr_to_binary_tree(array1);
let root2 = convert_arr_to_binary_tree(array2);
let root3 = convert_arr_to_binary_tree(array3);
console.log(root1);
console.log(root2);
console.log(root3);
let output1 = path_from_root_to_node(root1, 5);
let output2 = path_from_root_to_node(root2, 5);
let output3 = path_from_root_to_node(root3, 11);
let output4 = path_from_root_to_node(root3, 8);
console.log(output1); //[1, 2, 5]
console.log(output2); //[1, 3, 5]
console.log(output3); //[1, 3, 4, 6, 10, 11]
console.log(output4); //[1, 3, 5, 8]
