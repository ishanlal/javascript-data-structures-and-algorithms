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
}
class Queue{
  constructor(){
    this.q1 = new Stack();
    this.q2 = new Stack();
  }
  size(){
    return this.q1.size() + this.q2.size();
  }
  enqueue(item){
    this.q1.push(item);
  }
  dequeue(){
    if (this.q2.size() == 0){
      while(this.q1.size() != 0){
        this.q2.push(this.q1.pop());
      }
    }
    return this.q2.pop();
  }
}

let Q = new Queue();
console.log(Q);
Q.enqueue(1);
Q.enqueue(2);
Q.enqueue(3);
Q.enqueue(4);
console.log(Q);
let a = Q.dequeue();
let b = Q.dequeue();
console.log(a, b);
