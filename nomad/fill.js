const friends = [
  "aaa@aaa.com",
  "bbb@bbb.com",
  "ccc@ccc.com",
  "ddd@ddd.com",
  "eee@eee.com",
];

const check = () => friends.findIndex((friend) => friend.includes("ddd"));

let target = check();

if (target !== -1) {
  friends.fill("*".repeat(5), target, target + 1);
}

console.log(friends);
