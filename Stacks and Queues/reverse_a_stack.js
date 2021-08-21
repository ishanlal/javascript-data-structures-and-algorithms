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
function reverse_stack(org_stack){
  let new_stack = new Stack();
  let count = org_stack.size();
  for (let i = 0; i<count; i++){
      let ele = org_stack.pop();
      new_stack.push(ele);
  }
  return new_stack;
}
function create_stack(list){
  let org = new Stack();
  for (let num of list){
    org.push(num)
  }
  return org;
}
let sss = create_stack([1, 2, 3, 4]);
console.log(reverse_stack(sss));
