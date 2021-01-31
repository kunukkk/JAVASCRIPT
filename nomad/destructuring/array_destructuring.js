// Array_destructuring
const days = ["mon", "tue", "wed"];

const [mon, tue, wed, thu = "thu"] = days;

console.log(mon, tue, wed);
