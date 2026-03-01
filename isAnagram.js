/*

    Suppose you have two strings `s` and `t`.

    You are to write a function, isAnagram, that accepts two strings and 
    returns `true` if `t` is an anagram of `s`, and `false` otherwise.
    An Anagram is a word or phrase formed by rearranging the letters of a 
    different word or phrase, typically using all the original letters 
    exactly once.

    * Output:   should be a boolean value `true` if `t` is an anagram of `s`,
                and `false` otherwise.
    * Input:    two strings `s` and `t`.
    * 
    * 


    Test Cases:

    console.log(isAnagram("anagram", "nagaram")); // Expected output: true
    console.log(isAnagram("rat", "car")); // Expected output: false
    console.log(isAnagram("listen", "silent")); // Expected output: true
    console.log(isAnagram("a", "a")); // Expected output: true
    console.log(isAnagram("a", "b")); // Expected output: false
    console.log(isAnagram("anagram", "nag a ram")); // Expected output: false
    console.log(isAnagram("123", "321")); // Expected output: true
    
*/

function isAnagram(s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const count = {};

  for (let char of s) {
    count[char] = (count[char] || 0) + 1;
  }

  for (let char of t) {
    if (!count[char]) {
      return false;
    }
    count[char]--;
  }

  return true;
}

    console.log(isAnagram("anagram", "nagaram")); // Expected output: true
    console.log(isAnagram("rat", "car")); // Expected output: false
    console.log(isAnagram("listen", "silent")); // Expected output: true
    console.log(isAnagram("a", "a")); // Expected output: true
    console.log(isAnagram("a", "b")); // Expected output: false
    console.log(isAnagram("anagram", "nag a ram")); // Expected output: false
    console.log(isAnagram("123", "321")); // Expected output: true
