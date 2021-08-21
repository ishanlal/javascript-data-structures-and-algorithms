function test(){
let count = 0;
let first = 0;
for(let i = 1000; i>1; i = i/2){
  first++;
  for(let j = 0; j<i;j++){
    count++;
  }
}
return [first, count];
}
console.log(test());
