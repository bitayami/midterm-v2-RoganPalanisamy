/*

    Suppose you have a string `s`.

    You are to write a function, allUniqueCharacters, that accepts a string and 
    returns `true` if the string has all unique characters, and `false` otherwise.

    * Output:   should be a boolean value `true` if the string has all unique characters,
                and `false` otherwise.
    * Input:    a single string `s`.
    * 
    * 


    Test Cases:

    console.log(allUniqueCharacters("abcdef")); // Expected output: true
    console.log(allUniqueCharacters("hello")); // Expected output: false
    console.log(allUniqueCharacters("1234567890")); // Expected output: true
    console.log(allUniqueCharacters("112233")); // Expected output: false
    console.log(allUniqueCharacters("")); // Expected output: true
    console.log(allUniqueCharacters("AaBbCc")); // Expected output: true
    
*/

function allUniqueCharacters(s) {
  const seen = new Set();

  for (let char of s) {
    if (seen.has(char)) {
      return false;
    }
    seen.add(char);
  }

  return true;
}


console.log(allUniqueCharacters("abcdef")); // Expected output: true
console.log(allUniqueCharacters("hello")); // Expected output: false
console.log(allUniqueCharacters("1234567890")); // Expected output: true
console.log(allUniqueCharacters("112233")); // Expected output: false
console.log(allUniqueCharacters("")); // Expected output: true
console.log(allUniqueCharacters("AaBbCc")); // Expected output: true
    