class HashTable{
  constructor(){
    this.table = Array(10000).fill(null);
  }
  store(string){
    let hv = this.calculate_hash_value(string);
    if (hv != -1){
      if(this.table[hv] != null){
        this.table[hv].push(string);
      } else{
        this.table[hv] = [string];
      }
    }
  }
  lookup(string){
    let hv = this.calculate_hash_value(string);
    if (this.table[hv] != null){
      if (this.table[hv].includes(string)){
        return hv;
      }
    }
    return -1;
  }
  calculate_hash_value(string){
    let value = string.charCodeAt(0)*100 + string.charCodeAt(1);
    return value;
  }
}
let ht = new HashTable();
console.log(ht.calculate_hash_value('UDACITY'));
console.log(ht.lookup('UDACITY'));
console.log(ht.store('UDACITY'));
console.log(ht.lookup('UDACITY'));
console.log(ht.store('UDACIOUS'));
console.log(ht.lookup('UDACIOUS'));
