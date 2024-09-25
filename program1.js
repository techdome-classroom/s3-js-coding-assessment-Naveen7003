/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const stack =[];
  const pairs ={
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (let char of s) {
    // If character is  closing bracket
    if (char in pairs){
      // Pop from stack if  not empty else use dummy 
      const topElement = stack.length ?  stack.pop() : "#"

      // If the popped value doesn’t match the corresponding opening bracket
      if(topElement !== pairs[char]){
        return false;
      }
    } else{
      // Push the opening bracket into the stack
      stack.push(char);
    }}

  // If  stack is empty all brackets were matched
  return stack.length === 0;
};

module.exports = { isValid };
