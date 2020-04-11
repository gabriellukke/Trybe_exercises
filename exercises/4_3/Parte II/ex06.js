function sumOfAll(numbers) {
  let total = 0;
  
  for (let i = 1; i <= numbers; i++) {
    total += i;
  }
  
  return total;
} 

console.log(sumOfAll(5));