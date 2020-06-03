function mostRepeated(numbers) {
  let countRepeated = 0;
  let countNumber = 0;
  let indexRepeated = 0;

  for (let i in numbers) {
    let checkNumber = numbers[i];
    for (let i2 in numbers) {
      if (checkNumber === numbers[i2]) {
        countNumber++;
      }
    }
    if (countNumber > countRepeated) {
      countRepeated = countNumber;
      indexRepeated = i;
    }
    countNumber = 0;
  }
 
  return numbers[indexRepeated];
}

console.log(mostRepeated([2, 3, 2, 5, 8, 2, 3]));