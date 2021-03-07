//Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

//step1. concat both strings 
//step2. add combined string to array
//step3. remove duplicates
//step4. sort alphabeticacly
//step5. return as a string

function longest(s1, s2){
  let comboString = (s1+s2);
  comboString = comboString.split('');
  comboString  = [...new Set(comboString )]; 
  comboString = comboString.sort();  
   return comboString.join('') ;
    
  };

  module.exports = longest;