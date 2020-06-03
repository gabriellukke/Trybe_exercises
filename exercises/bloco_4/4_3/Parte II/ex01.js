function verificaPalindromo(string){
  let revert = string.split('').reverse().join('');
  let result = false;
  
  if (string === revert){
    result = true;
  }

  return result;
}

console.log(verificaPalindromo("arara"));