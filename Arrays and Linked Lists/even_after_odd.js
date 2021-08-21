class Node{
  constructor(data){
    this.data = data;
    this.next = null;
  }
}
function create_ll(arr){
  if (arr.length == 0){
    return null;
  }
  let head = new Node(arr[0]);
  let tail = head;
  for (let i = 1 ; i<arr.length ; i++){
    tail.next = new Node(arr[i]);
    tail = tail.next;
  }
  return head;
}
function even_after_odd(head){
  if (head == null) {
    return head;
  }
  let even_head = null;
  let even_tail = null;
  let odd_head = null;
  let odd_tail = null;
  let node = head;
  while (node){
    let next_node = node.next;
    if (node.data % 2 == 0){
      // even
      if (even_head == null){
        even_head = node;
        even_tail = even_head;
      }
      else{
        even_tail.next = node;
        even_tail = even_tail.next;
      }
    }else{
      //odd
      if (odd_head == null){
        odd_head = node;
        odd_tail = odd_head;
      }else{
        odd_tail.next = node;
        odd_tail = odd_tail.next;
      }
    }
    node.next = null;
    node = next_node;
  }
  if (odd_head == null){
    return even_head;
  }
  odd_tail.next = even_head;
  return odd_head;
}
let results = even_after_odd(create_ll([1, 2, 3, 4, 5, 6]));
console.log(JSON.stringify(results));
