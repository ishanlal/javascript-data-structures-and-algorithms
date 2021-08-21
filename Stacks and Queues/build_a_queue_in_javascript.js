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

let Q = new Queue();
Q.enqueue(1);
Q.enqueue(2);
Q.enqueue(3);
console.log(Q);
Q.dequeue();
console.log(Q);
