class LinkedListNode{
  constructor(key, value){
    this.key = key;
    this.value = value;
    this.next = null;
  }
}
class HashMap{
  constructor (initial_size = 10){
    this.bucket_array = Array(initial_size).fill(null);
    this.p = 37;
    this.num_entries = 0;
    this.load_factor = 0.7;
  }
  put(key, value){
    let bucket_index = this.get_bucket_index(key);
    let new_node = new LinkedListNode(key, value);
    let head = this.bucket_array[bucket_index]; // reference that points to the existing bucket at position bucket_index
    // check if key is already present in the map and update its value
    while (head != null){
      if (head.key == key){
        head.value = value;
        return;
      }
      head = head.next;
    }
    // key not found in the chain --> create a new entry and place it at the head of the chain.
    head = this.bucket_array[bucket_index];
    new_node.next = head;
    this.bucket_array[bucket_index] = new_node; // prepend the new_node to the beginning of the list
    this.num_entries+=1;
    // check for load factor
    let current_load_factor = this.num_entries/this.bucket_array.length;
    if(current_load_factor>this.load_factor){
      this.num_entries = 0;
      this.rehash();
    }
  }
  get(key){
    let bucket_index = this.get_bucket_index(key);
    let head = this.bucket_array[bucket_index];
    while(head != null){
      if (head.key == key){
        return head.value;
      }
      head = head.next;
    }
    return null;
  }
  size(){
    return this.num_entries;
  }
  get_bucket_index(key){
    let bucket_index = this.get_hash_code(key);
    return bucket_index;
  }
  get_hash_code(string){
    string = string.toString();
    let num_buckets = this.bucket_array.length;
    let current_coefficient = 1;
    let hash_code = 0;

    for (let character of string){
      hash_code = hash_code + (character.charCodeAt(0) * current_coefficient);
      hash_code = hash_code%num_buckets;
      current_coefficient = current_coefficient*this.p;
      current_coefficient = current_coefficient%num_buckets;
    }
    return hash_code%num_buckets;
  }
  rehash(){
    console.log('called');
    let old_num_buckets = this.bucket_array.length;
    let old_bucket_array = this.bucket_array;
    let num_buckets = 2*old_num_buckets;
    this.bucket_array = Array(num_buckets).fill(null);
    for (let head of old_bucket_array){
      while (head != null){
        let key = head.key;
        let value = head.value;
        this.put(key, value);
        head = head.next;
      }
    }
  }
  delete(key){
    let bucket_index = this.get_bucket_index(key);
    let head = this.bucket_array[bucket_index];
    let previous = null;
    while (head != null){
      if(head.key == key){
        if (previous == null){
          this.bucket_array[bucket_index] = head.next;
        } else{
          previous.next = head.next;
        }
        this.num_entries -= 1;
        return;
      }else{
        previous = head;
        head = head.next;
      }
    }
  }
}
let hm = new HashMap(7);
hm.put('one', 1);
hm.put('two', 2);
hm.put('three', 3);
hm.put('neo', 11);
console.log('Size: ', hm.size());
console.log(hm.get('one'));
console.log(hm.get('neo'));
console.log(hm.get('three'));
hm.delete('one');
console.log(hm.get('one'));
console.log('Size: ', hm.size());
