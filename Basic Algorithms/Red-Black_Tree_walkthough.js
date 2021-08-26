class Node{
  constructor(value, parent, color){
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = parent;
    this.color = color;
  }
}
function grandparent(node){
  if (node.parent == null){
    return null;
  }
  return node.parent.parent;
}
function pibling(node){
  let p = node.parent;
  let gp = grandparent(node);
  if (gp == null){
    return null;
  }
  if(p == gp.left){
    return gp.right;
  }
  if(p == gp.right){
    return gp.left;
  }
}
class RedBlackTree{
  constructor(root){
    this.root = new Node(root, null, 'red');
  }
  insert(new_val){
    let new_node = this.insert_helper(this.root, new_val);
    this.rebalance(new_node);
  }
  insert_helper(current, new_val){
    if(current.value < new_val){
      if(current.right){
        return this.insert_helper(current.right, new_val);
      } else {
        current.right = new Node(new_val, current, 'red');
        return current.right;
      }
    } else {
      if(current.left){
        return this.insert_helper(current.left, new_val);
      }else{
        current.left = new Node(new_val, current, 'red');
        return current.left;
      }
    }
  }
  rebalance(node){
    // Case 1: root is black not enforced
    if(node.parent == null){
      return;
    }
    // Case 2: Inserted a red underneath a black parent node
    // nothing to do here because, we are replacing the NULL black node with a red node who has NULL black children
    // so the path from parent to NULL nodes remains the same.
    if(node.parent.color == 'black'){
      return;
    }
    // From here, we know parent's color is red
    // Case 3: Parent and its sibling of newly inserted node are both red.
    if(pibling(node) && pibling(node).color == 'red'){
      pibling(node).color = 'black';
      node.parent.color = 'black';
      grandparent(node).color = 'red';
      return this.rebalance(grandparent(node));
    }
    let gp = grandparent(node);
    if(gp == null){
      return;
    }
    // Case 4: The newly inserted node has a red parent but the parent has a black sibling
    if (gp.left && node == gp.left.right){
      this.rotate_left(node.parent);
      node = node.left;
    }else if (gp.right && node == gp.right.left) {
      this.rotate_right(node.parent);
      node = node.right;
    }
    // Case 5:
    let p = node.parent;
    gp = p.parent;
    if (node == p.left){
      this.rotate_right(gp);
    } else {
      this.rotate_left(gp);
    }
    p.color = 'black';
    gp.color = 'red';
  }
  rotate_left(node){
    // save off the parent of the sub-tree we're rotating
    let p = node.parent;
    let node_moving_up = node.right;
    // After node moves up, the right child will now be a left child
    node.right = node_moving_up.left;
    // node moves down, to being a left child
    node_moving_up.left = node;
    node.parent = node_moving_up;
    // Now we need to connect to the sub-tree's parent
    // node may have been the root
    if(p != null){
      if (node == p.left){
        p.left = node_moving_up;
      } else {
        p.right = node_moving_up;
      }
    }
    node_moving_up.parent = p;
  }
  rotate_right(node){
    let p = node.parent;
    let node_moving_up = node.left;
    node.left = node_moving_up.right;
    node_moving_up.right = node;
    node.parent = node_moving_up;
    // Now we need to connect to the sub-tree's Parent
    if(p != null){
      if(node == p.left){
        p.left = node_moving_up;
      } else {
        p.right = node_moving_up;
      }
    }
    node_moving_up.parent = p;
  }
  search(find_val){
    return false;
  }
}
function print_tree(node, level=0){
  console.log(`${(level-1)>=1 && '    '} ${level>0 && '+--'} ${node.value}${node.color}`);
  if(node.left){
    print_tree(node.left, level+1);
  }
  if(node.right){
    print_tree(node.right, level+1);
  }
}

let tree = new RedBlackTree(9);
tree.insert(6);
tree.insert(19);
print_tree(tree.root);
tree.insert(13);
print_tree(tree.root);
tree.insert(16);
print_tree(tree.root);
