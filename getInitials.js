/*
In this exercise, we need to turn a full name or phrase into its initials.

Instruction
Create a function named getInitials that receives a string of words. It should return a new string containing the first letter of each word, capitalized.
*/

const getInitials = function (name) {
  return name
    .trim()
    .split(/\s+/)
    .map(word => word[0].toUpperCase())
    .join('');

};

console.log(getInitials("rogan palani samy"))

module.exports = getInitials;
