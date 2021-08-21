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
function skip_i_del_j(head, i, j){
if (i === 0){
  return null;
}
if(j === 0){
  return head;
}
if(head === null || i<0 || j<0){
  return head;
}

let current = head;
let previous = null;

while(current){
  for (let k = 0; k<(i-1) ;k++){
    if(current === null){
      return head;
    }
    current = current.next;
  }
  previous = current;
  current = current.next;
  for (let l = 0; l<j ;l++){
    if(current === null){
      break;
    }
    current = current.next;
  }
  previous.next = current;
}
  return head;
}
let results = skip_i_del_j(create_ll([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]), 2, 3);
console.log(JSON.stringify(results));
