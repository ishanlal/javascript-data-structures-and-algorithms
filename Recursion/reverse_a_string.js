function reverse_string(input){
  if(input.length == 0){
    return '';
  }
  return reverse_string(input.slice(1))+input[0];
}
console.log(reverse_string('water'));
