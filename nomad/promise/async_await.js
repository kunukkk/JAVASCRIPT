// make Promise look better(than (then, catch ...))

// const getMoviesPromise = () => {
//   fetch("https://yts.mx/api/v2/list_movies.json")
//     .then((response) => {
//       console.log(response);
//       return response.json();
//     })
//     .then((json) => console.log(json))
//     .catch((e) => console.log("error occur"));
// };

const getMoviesAsync = async () => {
  try {
    const response = await fetch("https://yts.mx/api/v2/list_movies.json");
    const json = await response.json();
    console.log(json);
    // throw Error("error occur");
  } catch (e) {
    console.log(e);
  } finally {
    console.log("we are done");
  }
};

getMoviesAsync();
