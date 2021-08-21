class Node{
  constructor(){

  }
}
class Queue{
  constructor(){
    this.head = null;
    this.tail = null;
    this.num_elements = 0;
  }
  enqueue(value){
    if (this.num_elements == 0) {
      this.head = new Node(value);
      this.tail = this.head;
    }
    else{
      let node = this.head;
      while (node.next){
        node = node.next;
      }
      node.next = new Node(value);
      this.tail = node.next;
    }
    this.num_elements += 1;
  }
  size(){
    return this.num_elements;
  }
  is_empty(){
    return this.num_elements == 0;
  }
  dequeue(){
    if (this.is_empty()){
      return null;
    }
    else{
      let ret_value = this.head.value;
      this.head = this.head.next;
      this.num_elements -= 1;
      return ret_value;
    }
  }
}
let Q = new Queue();
console.log(JSON.stringify(Q));
Q.enqueue(1);
Q.enqueue(2);
Q.enqueue(3);
Q.enqueue(4);
Q.enqueue(5);
Q.dequeue();
Q.dequeue();
console.log(JSON.stringify(Q));
