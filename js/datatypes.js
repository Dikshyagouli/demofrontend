//there are 2 type of datatypes #primetive and #non-premetive
//datatypes
// there are two types of datatypes #primitive and #non-premetive

// - String
// Number  — integer, double, float
// Boolean
// null
// undefined  // in js only
// Object  {key:value}
// Array

let title = "coconut"; //string
let number1 = "45"; //string
let rollNumber = 20;
let isRain = true;
let willNotRain;
let student = {
  name: "rahool",
  age: 20,
};
let students = ["Ram", "Shyam", "Sita", "Gita"]; //this is  array
let fruits = ["ram", "shyam", "magno", 2, 3, "banana"]; //this is not array
let users = ["sanjaya", "bijaya", "rupesh"]; // this is array "collection of similar data types is array"
console.log(typeof students);

let user = [
  {
    name: "Samrat",
    age: 20,
    email: "samrat@gmail.com",
    password: "samrat123",
    items: ["iphone", "labtop", "watch"],
  },
  {
    name: "Niaz",
    age: 16,
    email: "niaz@gmail.com",
    password: "niaz123",
    items: ["mask", "tshirt", "sunglass"],
  },
];

for (let i = 0; i < user.length; i++) {
  const element = user[i];
  console.log(element.name);
  console.log(element.email);
}

console.log(student.age);