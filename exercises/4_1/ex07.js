let percentageNote = -2;
let finalNote = null;

if (percentageNote > 100 || percentageNote < 0) {
  console.log("A nota deve estar entre 0 e 100!");
}
else if (percentageNote >= 90) {
  finalNote = "A";
}
else if (percentageNote >= 80) {
  finalNote = "B";
}
else if (percentageNote >= 70) {
  finalNote = "C";
}
else if (percentageNote >= 60) {
  finalNote = "D";
}
else if (percentageNote >= 50) {
  result = "E";
}
else {
  result = "F";
}

console.log("Sua nota é: ", finalNote)