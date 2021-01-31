const func = new Promise((resolve, reject) => {
  setTimeout(reject, 2000, "bye");
});

func.then((result) => console.log(result)).catch((error) => console.log(error));
