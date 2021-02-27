const noSpace = require('../src/removeStringSpaces')

describe('noSpace', () => {
   it('remove the spaces from the string', () => {
       expect(noSpace('This is just a test ')).toBe('Thisisjustatest');
       expect(noSpace('abb bba ccb abc ')).toBe('abbbbaccbabc');
   }) 
});