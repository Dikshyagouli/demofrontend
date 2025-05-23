let cart =[
    {
        product: 'Apple',
        price: 100,
        quantity: 2,
    },
    {
        product: 'mango',
        price: 50,
        quantity: 3,
    },
    {
        product: 'banana',
        price: 150,
        quantity: 4,
    },
    {
        product: 'pinapple',
        price: 250,
        quantity: 5,
    },
    {
        product: 'pinapple',
        price: 150,
        quantity: 1,
    },
];
const total = cart.reduce((acc,cur) => acc + cur.price * cur.quantity,0);
console.log("This is total", total);

let coures = [    
    {
    class: "maths",
    completedStatus: false,
    },
    {    
    class: "science",
    completedStatus: true,    
    },
    {
    class: "english",
    completedStatus: false,
    },
    {
    class: "history",
    completedStatus: true,
    },
    {
    class: "geography",
    completedStatus: false,
    },
];









const countries =[
    {
        name: "India",
        countrycode: "IN",
    },
    {
        name: "USA",
        countrycode: "US",
    },
    {
        name: "United kindom",
        countrycode: "UK",
    },
    {
        name: "Australlia",
        countrycode: "AU",
    },
    {
        name: "Canada",
        countrycode: "CA",
    },
    {
        name: "Germany",
        countrycode: "GE",
    },
    {
        name: "Nepal",
        countrycode: "NP",
    },
];
// function findCountriesByCode(code) {
//     return countries.filter(
//         (country) => country.countrycode.toLowerCase() === code.toLowerCase()
//     );
// }
// const inputCode = "us";
// const result = findCountriesByCode(inputCode);

// if (result.length > 0) {
//     console.log("Countries with code", inputCode, ":");
//     result.forEach((country) => console.log(country.name));
// } else {
//     console.log("No country found with code", inputCode);
// }

// function addition(x, y) {
//   return x * y;
// }
// let sum = addition(10, 20);
// console.log(sum);

const getCountryCode = (countryName) => {
    let country = countries.find(
      (c) => c.name.toLocaleLowerCase().trim() === countryName.trim()
    );
    if (country) {
      return country.countryCode;
    } else {
      return "Country Not Found";
    }
  };
  let shortCode = getCountryCode(" nepal ");
  console.log(shortCode);

  let User = [
    {
      name: "Sanjaya",
      age: 25,
      email: "sanjaya@gmail.com",
      password: "sanjaya123",
    },
    "shyam",
    "santosh",
    "ajaya",
    "bijaya",
    "sita",
    "gita",
    "rita",
  ];
  
  // if name availabel in array  your are register user oterwise not register user
  const isUserRegistered = (username) => {
    let user = User.find((u) => u === username.toLocaleLowerCase());
    if (user) {
      return "User is already registered";
    } else {
      return "User is not registered";
    }
  };
  
  const userName = isUserRegistered("sanjaya");
  console.log(userName);
  
  let User1 = [
    {
      name: "Sanjaya",
      age: 25,
      email: "sanjaya@gmail.com",
      password: "sanjaya123",
    },
    { name: "shyam", age: 25, email: "shyam@gmail.com", password: "shyam123" },
    "santosh",
    "ajaya",
    "bijaya",
    "sita",
    "gita",
    "rita",
  ];
  // find the email of user sanjaya
  const findUserEmail = (username) => {
    let user = User1.find((u) => u.name.toLocaleLowerCase() === username);
    if (user) {
      return user.name;
    } else {
      return "User not found";
    }
  };
  // find the email of user sanjaya
  const sanjaya = findUserEmail("shyam");
  console.log(sanjaya);
  
  const product = [
    { title: "labtop", price: 4000, quantity: 10 },
    { title: "mobile", price: 3000, quantity: 20 },
    { title: "watch", price: 2000, quantity: 30 },
    { title: "wallet", price: 1000, quantity: 30 },
  ];

  const findProduct = (price) => {
  let productNew = product.find((p) => {
    return p.price === price;
  });
  if (productNew) {
    console.log("yes there is product ");
  } else {
    console.log("not availabel");
  }
};
findProduct(7000);

const sentence = "I am a software developer";
const words = sentence.split(" ");
const totalWord = words.length;
console.log(totalWord);

let user = {
  name: "sanjaya",
  age: 25,
  email: "sanjaya@gmail.com",
  password: "sanjaya123",
};
let name1 = user.name;
console.log(name1);

let stringUser = JSON.stringify(user);
console.log(stringUser);
// to access the name of stringUser
const name2 = stringUser.name;
console.log(name2);
let parsedUser = JSON.parse(stringUser);
const name3 = parsedUser.name;
console.log(name3);