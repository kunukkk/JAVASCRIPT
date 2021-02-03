// Swapping and Skipping
let sat = "sun";
let sun = "sat";

[sat, sun] = [sun, sat];

console.log(sat, sun);

const days = ["mon", "tue", "wed", "thu", "fri"];
const [, , , thu, fri] = days;

console.log(thu, fri);

console.log(...days);
