localStorage.setItem("name","dikshya");
localStorage.setItem("token","dsdsdsdsd");
const name1 = localStorage.getItem("name");
console.log("this is name form local storage", name1);
const token = localStorage.getItem("token");
console.log("this is token form local storage", token);

let user = {
    name: "Dikshya",
    token: "dsdsds",
    email: "dikshyagouli1@gmail.com",
    password: "12345",
};

localStorage.setItem("user-obj", JSON.stringify(user));
let userobj = localStorage.getItem("user-obj")
console.log("This is user:" , userobj);

// let username = userobj.name;
// console.log("user form local storage :",username);

let Parseuser = JSON.parse(userobj);
let Parseuser = Parseuser.name;
console.log("parse user from local storage:", Parseuser);

fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((response) => response.json())
      .then((json) => console.log(json))