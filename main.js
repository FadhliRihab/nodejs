const obj = require("./local");

console.log("hello world");
console.log(obj.min(Number(process.argv[2]), Number(process.argv[3])));
console.log(obj.add(Number(process.argv[2]), Number(process.argv[3])));

console.log(process.argv);
