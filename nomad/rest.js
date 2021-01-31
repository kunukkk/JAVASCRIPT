const infiniteArgs = (...kimchi) => console.log(kimchi);

infiniteArgs("1", 2, true, "lalala", [1, 2, 3, 4]);

const bestFriendMaker = (first, ...rest) => {
  console.log(`My best friend is ${first}`);
  console.log(rest);
};

bestFriendMaker("lee", "heo", "choi", "shin");

const user = {
  NAME: "lee",
  age: 20,
  password: 123,
};

// delete
const killPassword = ({ password, ...rest }) => rest;
const cleanuser = killPassword(user);
console.log(cleanuser);

// insert
setCountry = ({ country = "KR", ...rest }) => ({ country, ...rest });
console.log(setCountry(user));

// rename
const rename = ({ NAME: name, ...rest }) => ({ name, rest });
console.log(rename(user));
