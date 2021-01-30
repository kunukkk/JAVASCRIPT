const friends = [
  "aaa@aaa.com",
  "bbb@bbb.com",
  "ccc@ccc.com",
  "ddd@ddd.com",
  "eee@eee.com",
];

const target1 = friends.find((friend) => friend.includes("ddd"));
console.log(target1);

const target2 = friends.findIndex((friend) => friend.includes("ddd"));
const username = friends[target2].split("@")[0];
const email = "fff.com";
friends[target2] = `${username}@${email}`;
console.log(friends);
