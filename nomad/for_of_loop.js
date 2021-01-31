const friends = ["lee", "heo", "choi", "shin", "aaa", "bbb"];

const addHeart = (c, i, a) => console.log(c, i, a);

friends.forEach((friend) => console.log(friend));

console.log("-------------------------------");
for (const friend of friends) {
  if (friend === "shin") {
    break;
  } else {
    console.log(friend);
  }
}

console.log("-------------------------------");
for (const letter of "hello") {
  console.log(letter);
}
