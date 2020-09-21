const readline = require('readline-sync');

const calcIMC = () => {
  const weight = readline.questionFloat('What is your weight(kg) ? ').toFixed(2);
  const height = readline.questionFloat('What is your height(m) ? ').toFixed(2);

  const imc = (weight / Math.pow(height, 2)).toFixed(2);

  console.log(imc, 'WTF ?')

  if (imc < 18.5) {
    console.log(`Your IMC is: ${imc}, You're underweight(thinness)`);
    return;
  };

  if (imc >= 18.5 && imc < 25) {
    console.log(`Your IMC is: ${imc}, You're with normal weight`);
    return;
  };

  if (imc >= 25 && imc < 30) {
    console.log(`Your IMC is: ${imc}, You're overweight (overweight)`);
    return;
  };

  if (imc >= 30 && imc < 35) {
    console.log(`Your IMC is: ${imc}, You're with obesity grade I`);
    return;
  };
  
  if (imc >= 35 && imc < 40) {
    console.log(`Your IMC is: ${imc}, You're with obesity grade II`);
    return;
  };

  console.log(`Your IMC is: ${imc}, You're with obesity grade III and IV`);

};

calcIMC();