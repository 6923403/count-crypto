// const toWantstr = require('./index.js');
const toWantstr = require('@vcvckw/towantstr');

console.log("Hello Wrold!")

// removeMySpaces
text = toWantstr.removeSpace("Hello Wrold!");
console.log(text)

//toLow
text = toWantstr.toLowText("Hello Wrold!");
console.log(text)

//toSha256
text = toWantstr.toSha256("Hello Wrold!");
console.log(text)

//toMd5
text = toWantstr.toMd5("Hello World!");
console.log(text)
