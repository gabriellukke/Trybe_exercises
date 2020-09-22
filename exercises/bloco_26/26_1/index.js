const inquirer = require('inquirer');

const calcIMC = async () => {
  const answers = await inquirer.prompt([
    { name: 'weight', type: 'input', message: 'What is your weight(kg) ?' },
    { name: 'height', type: 'input', message: 'What is your height(m) ?' }
  ])
  const weight = parseFloat(answers.weight).toFixed(2);
  const height = parseFloat(answers.height).toFixed(2);

  const imc = (weight / Math.pow(height, 2)).toFixed(2);

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