console.log('Hello World!')
var str1 = 'Udacity';
console.log(str1.length);
console.log(str1.toLowerCase());
console.log(str1.toUpperCase());
console.log(str1.slice(1, 6));
console.log(str1.slice(0, 6));
console.log(str1.slice(1));
console.log(str1.slice(-6, -1));
var str2 = '       Udacity       ';
console.log(str2.trim());
console.log(str1.replace('y', 'B'));
var str3 = 'Welcome, Constance!';
console.log(str3.split(','));
console.log(str3 + ' ' + str1);
var marks = 100;
console.log(str3 + "  You have scored a perfect " + marks)
// sort a string
var res = str3.split("");
res.sort();
console.log(res)
// Reverse Strings
function string_reverser(our_string){
  let rev_str = '';
  count = our_string.length;
  for(let i = count-1; i>=0; i--) {
    rev_str = rev_str + our_string[i];
  }
  console.log('original string: ', our_string);
  console.log('reversed string: ', rev_str);
  return rev_str;
}
string_reverser('water');
//anagram checker
function anagram_checker(s1, s2){
  let str1 = s1.split(' ').join('').toLowerCase();
  let str2 = s2.split(' ').join('').toLowerCase();
  if(str1.length == str2.length){
    let a1 = str1.split('').sort().join('');
    let a2 = str2.split('').sort().join('');
    console.log(a1);
    console.log(a2);
    if(a1 == a2){
      return true;
    }
  }
  return false;
}
let result = anagram_checker('Slot machines', 'Cash lost in me');
console.log(result);
// Removing punctuation using iteration
var punctuation = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';
function removePunc(string){
  return string.split('').filter(function (letter){
    return punctuation.indexOf(letter) === -1;
  }).join('');
}
removePunc('Hello, World!');
//removing punctuation using regex
var regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
function removePunctuation(string) {
  return string.replace(regex, '');
}
removePunctuation('Hello, World!');
// Reverse words in sentence
function word_flipper(our_string){
  let rev_sentence = '';
  let rev_str = '';
  let rev_list = [];
  let words = our_string.split(' ');
  for (let i = 0; i<words.length ; i++){
    count = words[i].length;
    for (let k = count-1 ;k>=0 ; k--){
      rev_str = rev_str + words[i][k];
    }
    rev_str = rev_str + " ";
  }
  rev_list.push(rev_str);
  console.log(rev_list);
  rev_sentence = rev_list[0].toString().trim();
  return rev_sentence
}
result = word_flipper('This is an example');
console.log(result);
// Hamming Distance
function hamming_distance(str1, str2) {
  let hamming = 0;
  if(str1.length == str2.length){
    for (let i=0 ; i<str1.length ; i++) {
      if(str1[i] != str2[i]){
        hamming += 1;
      }
    }
    return hamming;
  }
  else{
    return null;
  }
}
result = hamming_distance('ACTTGACCGGG','GATCCGGTACA');
console.log(result);
