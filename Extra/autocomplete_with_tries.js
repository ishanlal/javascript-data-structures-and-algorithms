// Build a Trie in JS
class TrieNode{
  constructor(){
    this.children = {};
    this.isWord = false;
  }
  // finding suffixes
  suffixes(suffix=''){
    let suffixes = [];
    for(let [char, node] of Object.entries(this.children) ) {
      if (node.isWord){
        suffixes.push(suffix+char+'\n');
      }
      if(node.children){
        suffixes += node.suffixes(suffix+char);
      }
    }
    return suffixes;
  }
}

class Trie{
  constructor(){
    this.root = new TrieNode();
  }
  insert(word){
    let node = this.root;
    for(let char of word){
      if(!Object.keys(node.children).includes(char)){
        node.children[char] = new TrieNode();
      }
      node = node.children[char];
    }
    node.isWord = true;
  }
  find(prefix){
    let node = this.root;
    for(let char of prefix){
      if(!Object.keys(node.children).includes(char)){
        return null;
      }
      node = node.children[char];
    }
    return node;
  }
}

// Testing it all out
let myTrie = new Trie();
let wordList = [
    "ant", "anthology", "antagonist", "antonym",
    "fun", "function", "factory",
    "trie", "trigger", "trigonometry", "tripod"
];
for (let word of wordList){
    myTrie.insert(word);
}
console.log(myTrie);
function suffix(prefix){
  if(prefix != ''){
      let prefixNode = myTrie.find(prefix);
      if(prefixNode){
        console.log( prefixNode.suffixes() );
      }else{
        console.log(prefix + ' not found');
      }
  } else {
    console.log('');
  }
}
suffix('a');
suffix('f');
suffix('t');
