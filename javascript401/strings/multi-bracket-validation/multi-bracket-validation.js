
'use strict';

const Stack = require('./stack.js');
let stack = new Stack();

module.exports = function multiBracketValidation(str){

  let arr = str.split('');
  console.log(arr);
  // let lr = ')', lc = '}', ls = ']';
  // let open = [ '[', '{', '(' ];
  // let close = [ ']', '}', ')' ];
  // let opening = open.includes(open);
  // console.log(opening);

  if ( arr[0] == ')' ) {
    console.log(arr[0]);
    return false;
  };

  for (let i = 0; i < arr.length; i++){
    if ( i == '(' ) {
      stack.push(i);
    };
    if ( i == ')' ) {
      let popped = stack.pop();

      if ( popped != '[' || '(' || '{' ) {
        return false;
      }
      else if ( !stack.peek() ) {
        return false;
      }
      else {
        return true;
      };

    };

  };

};
