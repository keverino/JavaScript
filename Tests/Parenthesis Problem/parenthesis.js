/*
  Given an expression string exp , write a program to examine whether the pairs and the orders of “{“,”}”,”(“,”)”,”[“,”]” are correct in exp.

  Example:

  Input: exp = "[()]{}{[()()]()}"
  Output: Balanced

  Input: exp = "[(])"
  Output: Not Balanced
*/

/*
  Javascript has push and pop methods, which operate on ordinary Javascript array objects.
*/

var expression = "[()]{}{[()()]()}";
//var expression = "[(])";
var stack = [];

for(var i = 0; i < expression.length; i++){
  currentChar = expression[i];

  // if element is an opening character, push to stack
  if(currentChar == "(" || currentChar == "{" || currentChar == "["){
    stack.push(currentChar);
  }

  // peek the top of the stack to see if there is a corresponding opening character. if it matches, then pop
  else if(currentChar == ")" && stack[stack.length-1] == "(" ){
    stack.pop();
  }
  else if(currentChar == "}" && stack[stack.length-1] == "{" ){
    stack.pop();
  }
  else if(currentChar == "]" && stack[stack.length-1] == "[" ){
    stack.pop();
  }
}


if(stack.length == 0)
  console.log('Balanced');
else
  console.log('Unbalanced');
