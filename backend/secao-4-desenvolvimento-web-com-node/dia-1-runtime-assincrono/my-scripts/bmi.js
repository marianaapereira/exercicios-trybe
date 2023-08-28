function calculateBMI() {
  const weight = 85;
  const height = 1.7;

  return weight / (height * height);
}

console.log(calculateBMI());