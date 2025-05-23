// variable declaration
var a = 6; //global scope
// let a = 5; //block scope
// const a = 5; //block scope
//global scope
// var a = 5;
// var a = 15;
// console.log("vlaue of a is", a);

// {
//   var a = 10;
//   console.log("value of block a is", a);
// }
// var a = 15;
// console.log("vlaue of global a is", a);

// block scope
let b = 10;
let c = 20;

{
  let b = 40;
  console.log("the value of block b is", b);
}
console.log("value of global b is ", b);

// //block scope

const d = 20;
const e = 40;

{
  const d = 50;
  console.log("vlaue of block d is", d);
}
console.log("vlaue of global d is", d);