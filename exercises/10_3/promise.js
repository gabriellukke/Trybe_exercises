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
  .then(sumOfAll => [2, 3, 5, 10].map(n => sumOfAll / n))
  .then(array => array.reduce((n, acc) => n + acc, 0))
  .catch(() => console.log('É mais de oito mil! Essa promise deve estar quebrada!'))

  
};

promise();