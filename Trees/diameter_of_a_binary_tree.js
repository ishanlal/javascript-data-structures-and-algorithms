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
function diameter_of_binary_tree(root){
  return diameter_of_binary_tree_func(root)[1];
}
function diameter_of_binary_tree_func(root){
  if (root == null){
    return [0,0];
  }
  let [left_height, left_diameter] = diameter_of_binary_tree_func(root.left);
  let [right_height, right_diameter] = diameter_of_binary_tree_func(root.right);

  let current_height = Math.max(left_height, right_height) + 1;
  let height_diameter = left_height+right_height;
  let current_diameter = Math.max(left_diameter, right_diameter, height_diameter);

  return [current_height, current_diameter];
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
let output1 = diameter_of_binary_tree(root1);
let output2 = diameter_of_binary_tree(root2);
let output3 = diameter_of_binary_tree(root3);
console.log(output1); //3
console.log(output2); //4
console.log(output3); //6
