const readline = require('readline-sync');

const calcIMC = () => {
  const weight = readline.questionFloat('What is your weight(kg) ? ').toFixed(2);
  const height = readline.questionFloat('What is your height(m) ? ').toFixed(2);

  const imc = (weight / Math.pow(height, 2)).toFixed(2);

  console.log('Your IMC is:', imc);
};

calcIMC();