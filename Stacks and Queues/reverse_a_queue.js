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
  is_empty(){
    return this.size() == 0;
  }
}
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
  is_empty(){
    return this.size() == 0;
  }
}
function build_queue(input_list){
  let qq = new Queue();
  for(let num of input_list){
    console.log('num: ', num);
    qq.enqueue(num);
  }
  return qq;
}
function reverse_queue(queue){
  let ss = new Stack();
  while (!(queue.is_empty())){
    ss.push(queue.dequeue());
  }
  console.log(ss);
  console.log(queue.size());
  while (!(ss.is_empty())){
    queue.enqueue(ss.pop());
  }
  console.log(queue);
  return queue;
}
let bq = build_queue([1, 2, 3]);
console.log(bq);
let rq = reverse_queue(bq);
//console.log(rq);
