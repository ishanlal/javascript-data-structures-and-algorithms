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
let myStack = new Stack();

myStack.push('1');
myStack.push('2');
myStack.push('3');
myStack.push('4');
myStack.push('5');
myStack.pop();
myStack.pop();

console.log(myStack.items);
