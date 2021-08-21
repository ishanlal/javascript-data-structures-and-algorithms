//  madam is a palindrome
// abba is
// cat is NOT
// a is
function is_palindrome(in_str){
  if (in_str.length <= 1){
    return true;
  }
  if( !(in_str.charAt(0) == in_str.charAt(in_str.length-1)) ) {
    return false;
  }
  let stripped = in_str.slice(1, -1);
  return is_palindrome(stripped);
}
console.log(is_palindrome('abba'));
console.log(is_palindrome('madam'));
console.log(is_palindrome('a'));
console.log(is_palindrome('cat'));
