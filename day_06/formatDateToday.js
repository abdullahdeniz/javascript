var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
var today  = new Date();

console.log(today.toLocaleDateString("en-US")); // 6/18/2020
console.log(today.toLocaleDateString("en-US", options)); // Thursday, June 18, 2020
