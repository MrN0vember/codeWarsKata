const monkeyCount = require('../src/countTheMonkeys');

describe('monkeyCount', () => {
   it('takes a given the number (n), populate an array with all numbers up to and including that number', () => {
       expect(monkeyCount(3)).toEqual([1,2,3]);
      expect(monkeyCount(10)).toEqual([1,2,3,4,5,6,7,8,9,10]);
       expect(monkeyCount(22)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22]);
   });
} );