const promise = () => {
  const myPromise = new Promise((resolve, reject) => {
    const arrayOfNums = Array.from(
      { length: 10 },
      () => Math.floor(Math.random() * 50) + 1
    );
    const sumOfAll = arrayOfNums.map(n => n * n).reduce((n, acc) => n + acc, 0);
    (sumOfAll > 8000) ? resolve() : reject()
  });
  
  myPromise
  .then(() => console.log('The promise was fulfilled!'))
  .catch(() => console.log('Oh no'))
};

promise();