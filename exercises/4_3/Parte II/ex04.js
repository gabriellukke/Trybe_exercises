function longestName(array) {
  let longest = array[0];

  for(let i in array) {
    if (longest.length < array[i].length) {
      longest = array[i];
    };
  }

  return longest;
}

console.log(longestName(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));