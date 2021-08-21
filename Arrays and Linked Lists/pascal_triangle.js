function nth_pascal(n){
  if (n == 0) {
    return [1];
  }
  let current_row = [1]; //first row
  for (let i = 1; i<(n+1) ;i++){
    let previous_row = current_row;
    current_row = [1];
    for (let k = 1; k<(i) ; k++){
      let next_num = previous_row[k] + previous_row[k-1];
      current_row.push(next_num);
    }
    current_row.push(1);
  }
  return current_row;
}
let results = nth_pascal(3);
console.log(results);
