class Stack{
  constructor(init_size=10){
    this.arr = Array(init_size).fill(0);
    this.next_index = 0;
    this.num_elements = 0;
  }
  push(data){
    if (this.next_index == this.arr.length){
      console.log('Array is full!');
      this.handle_stack_capacity_full();
    }

    this.arr[this.next_index] = data;
    this.next_index += 1;
    this.num_elements += 1;
  }
  handle_stack_capacity_full(){
    let old_arr = this.arr;
    this.arr = Array(2*old_arr.length).fill(0);
    for(const [idx, ele] of old_arr.entries()){
      this.arr[idx] = ele;
    }
  }
  size(){
    return this.num_elements;
  }
  is_empty(){
    return this.num_elements == 0;
  }
  pop(){
    if (this.is_empty()){
      this.next_index = 0;
      return null;
    }
    this.next_index -= 1;
    this.num_elements -= 1;
    return this.arr[this.next_index];
  }
}
let a = new Stack();
for (let i = 0;i<11;i++){
a.push('Test!');
}
let b = a.size();
let c = a.is_empty();
let d = a.pop();
console.log(a, b, c, d);
