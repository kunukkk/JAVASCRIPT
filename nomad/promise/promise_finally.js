const p1 = new Promise((resolve, reject) => {
  setTimeout(reject, 3000, "First");
})
  .then((value) => console.log(value))
  .catch((e) => console.log("error occur"))
  .finally(() => console.log("I'm done"));
