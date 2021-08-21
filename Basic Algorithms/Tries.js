// Useful to build a spell checker
// Tells if the word is valid or not
// Doesn't give suggested words
// Trie helps decrease memory usage while sacrificing a little on performance
let basic_trie = {
  'a': {
    'd': {
      'd': {
        'word_end': true
      },
        'word_end': false
      },
        'word_end': true
      },
        'h': {
          'i': {
            'word_end': true
          },
            'word_end': false
          }
        }
console.log("is 'a' a word: ", basic_trie['a']['word_end']);
console.log("is 'ad' a word: ", basic_trie['a']['d']['word_end']);
console.log("is 'add' a word: ", basic_trie['a']['d']['d']['word_end']);
function is_word(word){
  let current_node = basic_trie;
  for (let char of word){
    let trie_array = Object.keys(current_node);
    if(!trie_array.includes(char)){
      return false
    }
  current_node = current_node[char];
  }
  return current_node['word_end'];
}
let test_words = ['ap', 'add'];
for (let word of test_words){
  if (is_word(word)){
    console.log(`${word} is a word.`);
  }else{
    console.log(`${word} is not a word.`);
  }
}
//
// Trie Class
//
class TrieNode{
  constructor(){
    this.is_word = false;
    this.children = {};
  }
}
class Trie{
  constructor(){
    this.root = new TrieNode();
  }
  add(word){
    let current_node = this.root;
    for (let char of word){
      let trie_array = Object.keys(current_node.children);
      if(!trie_array.includes(char)){
        current_node.children[char] = new TrieNode();
      }
      current_node = current_node.children[char];
    }
    current_node.is_word = true;
  }
  exists(word){
    let current_node = this.root;
    for (let char of word){
      let trie_array = Object.keys(current_node.children);
      if(!trie_array.includes(char)){
        return false;
      }
      current_node = current_node.children[char];
    }
    return current_node.is_word;
  }
}
//
let word_list = ['apple', 'bear', 'goo', 'good', 'goodbye', 'goods', 'goodwill', 'gooses'  ,'zebra'];
let word_trie = new Trie();
// Add words
for (let word of word_list){
  word_trie.add(word);
}
// Test words
test_words = ['bear', 'goo', 'good', 'goos'];
for (let word of test_words){
  if (word_trie.exists(word)){
    console.log(`${word} is a word.`);
  } else {
    console.log(`${word} is not a word.`);
  }
}
