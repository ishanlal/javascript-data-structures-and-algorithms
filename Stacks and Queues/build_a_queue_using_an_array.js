class Queue{
  constructor(init_size=10){
    this.arr = Array(init_size).fill(0);
    this.next_index = 0;
    this.front_index = -1;
    this.queue_size = 0;
  }
  enqueue(value){
    if(this.queue_size == this.arr.length){
      this.handle_queue_capacity_full();
    }
    this.arr[this.next_index] = value;
    this.queue_size += 1;
    this.next_index = (this.next_index+1) % (this.arr.length);
    if (this.front_index == -1) {
      this.front_index = 0;
    }
  }
  size(){
    return this.queue_size;
  }
  is_empty(){
    return this.queue_size == 0;
  }
  front(){
    if(this.front_index == -1){
      return null;
    }
    else{
      return this.arr[this.front_index];
    }
  }
  dequeue(){
    if(is_empty()){
      this.front_index = -1;
      this.next_index = 0;
      return null;
    }
    else{
      let ret_value = this.arr[this.front_index];
      this.front_index = (this.front_index+1) % (this.arr.length);
      this.queue_size -= 1;
      return ret_value;
    }
  }
  handle_queue_capacity_full(){
    let old_arr = this.arr;
    this.arr = Array(this.arr.length*2).fill(0);
    for(let [idx, ele] of old_arr.entries()){
      this.arr[idx] = ele;
      this.next_index = idx;
    }
    this.front_index = 0;
    this.next_index += 1;
  }
}

let Q = new Queue();
for(let i =0;i<12;i++){
Q.enqueue(1);
}

console.log(Q);
