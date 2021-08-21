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
function eval_post_fix(input_list){
  let myStack = new Stack();
  for (let i = 0; i<input_list.length ;i++){
    if (input_list[i] == '+'){
      let a = myStack.pop();
      let b = myStack.pop();
      myStack.push(a+b);
    }
    else if (input_list[i] == '-') {
      let a = myStack.pop();
      let b = myStack.pop();
      myStack.push(a-b);
    }
    else if (input_list[i] == '*') {
      let a = myStack.pop();
      let b = myStack.pop();
      console.log('a, b: ',(a*b));
      myStack.push((a*b));
    }else if (input_list[i] == '/') {
      let a = myStack.pop();
      let b = myStack.pop();
      myStack.push(Math.floor(a/b));
    }
    else{
      console.log(myStack.items);
      myStack.push(parseInt(input_list[i]));
      console.log(myStack.items);
    }
  }
  return myStack.pop();
}
//let eqn1 = eval_post_fix(["3", "1", "+", "4", "*"]);
//let eqn2 = eval_post_fix(["4", "13", "5", "/", "+"]);
let eqn3 = eval_post_fix(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]);
//console.log(eqn1, eqn2, eqn3);
console.log(eqn3);
