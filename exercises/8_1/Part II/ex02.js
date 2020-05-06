const longestWord = phrase => { 
  const arr = phrase.split(' ');
  let word = arr[0];
  for (let i = 0; i < arr.length; i += 1) {
    if (word.length < arr[i].length) {
      word = arr[i];
    };
  };
  return word;
}

console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu'));
