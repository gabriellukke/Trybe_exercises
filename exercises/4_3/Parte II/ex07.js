function checkWordEnd(word, wordEnd) {
  result = true;
  for (let i = 0; i < wordEnd.length; i++) {
    if (word[word.length - wordEnd.length + i] != wordEnd[i]) {
      result = false;
    }
  }
  return result;
}

console.log(checkWordEnd("Trybe", "a"));

