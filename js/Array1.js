// //types of loop for iteration
// for loop
// while loop
// do while
// for each
// map

// let i = 1;
// let j = 2;
// let k = 3;
// console.log(i);
// console.log(j);
// console.log(k);

for (let i = 1; i <= 10; i++) {
    console.log(`2 * ${i}=` , i * 2);//template literal  
}

let num = [1,2,3,4,5,6,7,8,9,10];
console.log(num.indexOf(4));

let fruits = ["apple", "banana","mango"];
let addFruit = fruits.push("grapes")
console.log(fruits);

let oddNumber = [];
let evenNumber = [];
for (let i = 0; i < num.length; i++) {
    const x = num[i];
    if (x % 2 == 0) {
        evenNumber.push(x);
    } else {
        oddNumber.push(x);
    }
}
console.log("This is even number",evenNumber);
console.log("This is odd number",oddNumber);


