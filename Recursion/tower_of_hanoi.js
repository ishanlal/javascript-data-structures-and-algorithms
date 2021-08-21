function tower_of_hanoi(num_disks){
  hanoi_solution(num_disks, 'S', 'A', 'D');
}
function hanoi_solution(num_disks, source, aux, dest){
  if (num_disks == 0){
    return;
  }
  if(num_disks==1){
    console.log('%s %s', source, dest);
    return;
  }
  hanoi_solution(num_disks-1, source, dest, aux);
  console.log('%s %s', source, dest);
  hanoi_solution(num_disks-1, aux, source, dest);
}
let result = tower_of_hanoi(2);
console.log('num_disks = 3');
result = tower_of_hanoi(3);
