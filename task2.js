const isValid = (s) => {
    const arry1 = [];
    const brackets = {
      '(': ')',
      '{': '}',
      '[': ']'
    };
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
      if (brackets.hasOwnProperty(char)) {  
        arry1.push(char);
      } else {
        const top = arry1.pop();
        if (char !== brackets[top]) {
          return false; 
        }
      }
    }
    return arry1.length === 0;
};

console.log(isValid("({})"));      
console.log(isValid("(])"));   
