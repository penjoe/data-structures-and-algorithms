'use strict'

const Stack = require('../stacks-and-queues/lib/stack.js');

const bracketValidation = (str) => {

  // if( !str ) { return false; };
  // if( str.length <= 1 ) { return false; };

  let stack = new Stack();

  let open = {
    '(': ')',
    '{': ')',
    '[':']',
  };
  let close = {
    ')': '(',
    '}': '{',
    ']': '[',
  };

  for( let i = 0; i < str.length; i++ ){

    if( open[str[i]]){
      stack.push(str[i]);
    } else if( close[str[i]]){
      let top = stack.pop();
      if( top !== close[str[i]]) {
        return false
      }
    }
  };

  return stack.isEmpty();

};

module.exports = bracketValidation;