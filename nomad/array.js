// Array.of()
// const friends = ["Lee", "Choi", "Heo", "Shin"];
const friends = Array.of("Lee", "Choi", "Heo", "Shin");

console.log(friends);

// Array.from()
const buttons = document.getElementsByClassName("btn");

// buttons -> array(X), array-like object(O)
Array.from(buttons).forEach((button) => {
  button.addEventListener("click", () => console.log("blablabla"));
});
