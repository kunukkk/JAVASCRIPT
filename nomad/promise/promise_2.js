const func = new Promise((resolve, reject) => {
  resolve(2);
});

func
  .then((number) => {
    console.log(number * 2);
    return number * 2; // ==> otherNumber
  })
  .then((otherNumber) => {
    console.log(otherNumber * 2);
  });

console.log("-------------------------------");

const timesTwo = (number) => number * 2;

func
  .then(timesTwo)
  .then(timesTwo)
  .then(timesTwo)
  .then(timesTwo)
  .then(timesTwo)
  .then(timesTwo)
  .then((lastNumber) => console.log(lastNumber))
  .catch((err) => console.log(err));
