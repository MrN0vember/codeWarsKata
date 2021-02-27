// Write function that can take any non-negative integer as an argument and return it with its digits in descending order.

function descendingOrder(n){
    return parseInt(String(n).split('').sort().reverse().join(''))
  };

module.exports = descendingOrder;

