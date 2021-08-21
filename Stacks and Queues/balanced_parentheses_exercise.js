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

function equation_checker(equation){
  stack = new Stack();
  for (let char of equation){
    if(char == '('){
      stack.push(char);
    }else if (char == ')') {
      if(stack.pop() == null){
        return false;
      }
    }
  }
  if (stack.size() == 0){
    return true;
  }
  else{
    return false;
  }
}
let results = equation_checker('((3^2 + 8)*(5/2))/(2+6)');
console.log(results);
