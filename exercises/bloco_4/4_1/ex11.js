let grossSalary = 3000;
let inss = null;
let ir = null;

// INSS
if (grossSalary <=  1556.94) {
  inss = 8 / 100 * grossSalary;
}
else if (grossSalary <= 2594.92) {
  inss = 9 / 100 * grossSalary;
}
else if (grossSalary <= 5189.82) {
  inss = 11 / 100 * grossSalary;
}
else {
  inss = 570.88;
}

//Base Salary
let baseSalary = grossSalary - inss;

//IR
if (baseSalary <= 1903.98) {
  ir = 0;
}
else if (baseSalary <= 2826.65) {
  ir = 7.5 / 100 * baseSalary - 142.80;
}
else if (baseSalary <= 3751.05) {
  ir = 15 / 100 * baseSalary - 354.80;
}
else if (baseSalary <= 4664.68) {
  ir = 22.5 / 100 * baseSalary - 636.13;
}
else {
  ir = 27.5 / 100 * baseSalary - 869.36;
};

//Net Salary
let netSalary = grossSalary - inss - ir;


console.log("INSS: R$", inss);
console.log("IR: R$", ir);
console.log("Net Salary: R$", netSalary);