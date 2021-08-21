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
  top(){
    if (this.size() == 0){
      return null;
    }
    else{
      return this.items[this.items.length-1];
    }
  }
  is_empty(){
    return this.size() == 0;
  }
}
function minimum_bracket_reversals(input_string){
  if ((input_string.length %2) == 1){
    return -1;
  }
  let stack = new Stack();
  let count = 0;
  for (let i = 0;i<input_string.length;i++){
    if (stack.is_empty()){
      stack.push(input_string[i]);
    }else{
      let top = stack.top();
      if (top != input_string[i]) {
        if (top == '{'){
          stack.pop();
          continue;
        }
      }
      stack.push(input_string[i]);
    }
  }
  let list = [];
  while (!stack.is_empty()){
    let first = stack.pop();
    let second = stack.pop();
    list.push(first);
    list.push(second);
    if (first == '}' && second == '}') {
      count += 1;
    }else if (first == '{' && second == '{') {
      count += 1;
    }
  }
  return count;
}
console.log(minimum_bracket_reversals("{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{}}}}}"));
