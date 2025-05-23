let num = 5;
let fib = [0, 1];
for (let i = 2; i < num; i++) {
    fib.push(fib[i-1] + fib[i-2]);
}
console.log(fib);

let users = [
  {
    name: "John",
    product: [
      { name: "macbook", price: 1000 },
      { name: "iphone", price: 500 },
      { name: "ipad", price: 800 },
    ],
  },
  {
    name: "Ramesh",
    product: [
      { name: "macbook", price: 100 },
      { name: "iphone", price: 500 },
      { name: "ipad", price: 80 },
    ],
  },
  {
    name: "Sujan",
    product: [
      { name: "macbook", price: 1000 },
      { name: "iphone", price: 50 },
      { name: "ipad", price: 800 },
    ],
  },
];

users.map((user) => {
  user.product.map((prod) => {
    if (prod.name == "iphone") {
      console.log(`${user.name} bought ${prod.name} for Rs. ${prod.price}`);
    }
  });
});

const User1 = [
  "Dinesh",
  "ram",
  "shyam",
  "krishna",
  "suresh",
  "ramesh",
];
const resgisterUser = (name) => {
  const user = User1.find((u) => u.toLowerCase() === name.toLowerCase());
  if (user) {
    console.log(`${user} is already registered`);
  } else {
    console.log(`${name} is not registered`);
  }
};
resgisterUser("Ramesh");

let accountNumber = "12345678999"
//how to mask accoudNumber 
function maskedAccNumber(accoudNumber){
  let lastFour = accoudNumber.slice(-4);
  let maskedParts = "*".repeat(accoudNumber.length -4)
  return maskedParts + lastFour;
}
let final = maskedAccNumber(accountNumber);
console.log(final);

let phoneNumber = 981345678
function maskedPhoneNumber(phoneNumber){
  let lastFour = phoneNumber.toString().slice(-4);
  let maskedPart = "*".repeat(phoneNumber.toString().length -4);
  return maskedPart + lastFour;
}
let finalPhone = maskedPhoneNumber(phoneNumber);
console.log(finalPhone);


