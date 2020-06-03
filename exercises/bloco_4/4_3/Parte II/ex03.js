function greaterIndex(array) {
  let smallest = array[0];
  let position = 0;

  for (let i in array) {
    if (smallest >= array[i]) {
      smallest = array[i];
      position = i;
    }
  }

  return position;
}

console.log(greaterIndex([2, 4, 6, 7, 10, 0, -3]));