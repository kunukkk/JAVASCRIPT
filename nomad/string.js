// .includes()
const isEmail = (email) => email.includes("@");

console.log(isEmail("showklee@naver.com"));

// .repeat()
const CC_NUMBER = "6060";

const displayName = `${"*".repeat(10)}${CC_NUMBER}`;

console.log(displayName);

// .startsWith(), .endsWith()
const name = "Mr.Lee";

console.log(name.startsWith("Mr"));
console.log(name.endsWith("Lee"));
