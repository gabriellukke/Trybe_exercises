function greaterIndex(array) {
  let greater = array[0];
  let position = 0;

  for (let i in array) {
    if (greater <= array[i]) {
      greater = array[i];
      position = i;
    }
  }

  return position;
}

console.log(greaterIndex([2, 3, 6, 7, 10, 1]));