const readline = require('readline-sync');

function calculateBMI() {
  // const weight = 85;
  // const height = 1.7;

  const weight = readline.questionFloat('What is your weight? ');
  const height = readline.questionFloat('What is your height? ');

  const bmi = weight / (height * height)

  return Math.round(bmi * 10) / 10;
}

console.log(calculateBMI());