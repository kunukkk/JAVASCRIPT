const nums = [1, 2, 3, 4];
const alps = ["a", "b", "c"];

console.log(nums);
console.log(...nums);
console.log([...nums, ...alps]);

//
const friends = ["lee", "heo", "choi", "shin"];
const newFriends = [...friends, "kim"];

console.log(newFriends);

const lee = {
  username: "lee",
};

console.log({ ...lee, password: 123 });

const lastName = prompt("Last name");

const user = {
  username: "lee",
  age: 20,
  ...(lastName !== "" && { lastName }),
};

console.log(user);
