class Heap{
  constructor(init_size=10){
    this.cbt = Array(init_size).fill(null); // initialize array
    this.next_index = 0; // next element goes here
  }
  size(){
    return this.next_index;
  }
  is_empty(){
    return this.size() == 0;
  }
  get_minimum(){
    if(this.size() == 0){
      return null;
    }
    return this.cbt[0];
  }
  /*
  _up_heapify(){
    let child_index = this.next_index;
    while (child_index >= 1){
      let parent_index = Math.floor((child_index-1)/2);
      let parent_element = this.cbt[parent_index];
      let child_element = this.cbt[child_index];
      if(parent_element > child_element){ // minHeap: smaller is moved up
        this.cbt[parent_index] = child_element;
        this.cbt[child_index] = parent_element;
        child_index = parent_index;
      } else {
        break;
      }
    }
  }
  insert(data){
    this.cbt[this.next_index] = data; // insert element at next_index
    this._up_heapify(); // heapify
    this.next_index += 1; // increase index by 1
    // if next_index is out of array bounds then double array size
    if (this.next_index >= this.cbt.length) {
      let temp = this.cbt;
      this.cbt = Array(2*this.cbt.length).fill(null);
      for(let i = 0; i<this.next_index ;i++){
        this.cbt[i] = temp[i];
      }
    }
  }
  */
  insert(data){
    // recursive solution
    this.cbt[this.next_index] = data;
    let parent = Math.floor((this.next_index)/2);
    this.upHeap(parent, this.next_index);
    this.next_index += 1;
    if(this.next_index >= this.cbt.length){
      let temp = this.cbt;
      this.cbt = Array(2*this.cbt.length).fill(null);
      for(let i = 0;i<this.next_index;i++){
        this.cbt[i] = temp[i];
      }
    }
  }
  upHeap(parent, child){
    if(child >= 1){
      if(this.cbt[parent] > this.cbt[child]){
        let temp = this.cbt[parent];
        this.cbt[parent] = this.cbt[child];
        this.cbt[child] = temp;
        let up_parent = Math.floor((parent-1)/2);
        let up_child = parent;
        this.upHeap(up_parent, up_child);
      } else {
        return;
      }
    }
  }
  _down_heapify(){ // minHeap: highest needs to be moved down
    let parent_index = 0; // top node
    while(parent_index < this.next_index){
      // calculate left and right child indicies
      let left_child_index = (2*parent_index) + 1;
      let right_child_index = (2*parent_index) + 2;
      // extract parent element, set left and right elemnts to null, min element (parent)
      let parent_element = this.cbt[parent_index];
      let left_element = null;
      let right_element = null;
      let minimum_element = parent_element;
      // check if left child exists
      if (left_child_index < this.next_index){
        left_element = this.cbt[left_child_index];
      }
      // check if right child exists
      if (right_child_index < this.next_index){
        right_element = this.cbt[right_child_index];
      }
      // compare with left child, set min_ele
      if(left_element != null){
        minimum_element = Math.min(left_element, parent_element, minimum_element);
      }
      // compare with right child, set min_ele
      if(right_element != null){
        minimum_element = Math.min(right_element, parent_element, minimum_element);
      }
      // check if parent is rightly placed, if so return
      if(minimum_element == parent_element){
        return;
      }
      // compare min_ele to left child and swap if equal
      if(minimum_element == left_element){
        this.cbt[parent_index] = minimum_element;
        this.cbt[left_child_index] = parent_element;
        parent_index = left_child_index;
      }
      // compare min_ele to right child and swap if equal
      else if(minimum_element == right_element){
        this.cbt[parent_index] = minimum_element;
        this.cbt[right_child_index] = parent_element;
        parent_index = right_child_index;
      }
    }
  }
  remove(){
    if(this.size() == 0){
      return null;
    }
    this.next_index -= 1; // move pointer back
    let to_remove = this.cbt[0];
    let last_element = this.cbt[this.next_index];
    this.cbt[0] = last_element; // swap last element with root
    this.cbt[this.next_index] = to_remove; // place to be deleted element to next pointer
    this._down_heapify(); // move higher value down and lower value up
    return to_remove;
  }
}

let heap = new Heap(5);
let elements = [1, 2, 3, 4, 1, 2];
for (let ele of elements){
  heap.insert(ele);
}
console.log(heap.cbt);
console.log('Inserted elements: ', elements);
console.log('size: ', heap.size());
console.log('Calling remove...', heap.remove());
//console.log(heap.cbt);
console.log('Calling remove...', heap.remove());
console.log('Calling remove...', heap.remove());
console.log('Calling remove...', heap.remove());
console.log('minimum: ', heap.get_minimum());
console.log('Calling remove...', heap.remove());
console.log('Calling remove...', heap.remove());
console.log('size: ', heap.size());
console.log('Calling remove...', heap.remove());
console.log(heap.is_empty());
