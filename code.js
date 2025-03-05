// // let a=[
// //     {
// //         "name": "a",
// //         "a": 2
// //     },
// //     {
// //         "name": [
// //             5
// //         ],
// //         "a": 3
// //     }
// // ]
// // for(let i=0;i<a.length;i++){
// //     console.log(a[i
// //     ])
// // }
// // let b=JSON.stringify(a)
// // for(let i=0;i<b.length;i++){
// //     console.log(b[i
// //     ])
// // }
// // let read=JSON.parse(b)
// // for(let i=0;i<read.length;i++){
// //     console.log(read[i
// //     ])
// // }


// // const user = {
// //     name: "Alice",
// //     age: 25,
// //     greet: function () { console.log("Hello!"); },
// //     city: undefined
// //   };
  
  
// //   console.log(JSON.stringify(user));
  
// // const user = {
// //     name: "Alice",
// //     age: 25,
// //     greet: function () { console.log("Hello!"); },
// //     city: undefined
// //   };
  
  
// //   console.log(JSON.stringify(user));

// // const arr = [1, 2, undefined, 4, function() {}];
// // const result = JSON.stringify(arr);
// // console.log(result);

// // // [1,2,undefined,4,null]

// // const arr = [1, 2, undefined, 4, function() {}];
// // const result = JSON.stringify(arr);
// // console.log(result);

// // [1,2,undefined,4,null]

// // const product = {
// //     name: "Laptop",
// //     price: 1500,
// //     currency: "USD"
// //   };
  
// //   function replacer(key, value) {
// //     if (key === "price") {
// //       return value * 0.9; // 10% discount
// //     }
// //     return value;
// //   }

// const product = {
//     name: "Laptop",
//     price: 1500,
//     currency: "USD"
//   };
  
//   function replacer(key, value) {
//     if (key === "price") {
//       return value * 0.9; // 10% discount
//     }
//     return value;
//   }
  
  
//   console.log(JSON.stringify(product, replacer));
  
// //   {"name":"Laptop","price":1500,"currency":"USD"}
// let arr=[1,5,2,68,3,2]
// console.log(arr.sort((i,j)=>(j-i)))
// const fruits = ["apple", "banana", "cherry", "date", "fig"];
// const result = fruits.slice(1, 3);
// console.log(result);
// let numbers = [3, 1, 4, 1, 5, 9];
// numbers.sort();
// console.log(numbers);
let sentence = "JavaScript is fun , apparently";
let words = sentence.split(' ');
console.log(words.join(' '));
let arr = [5, 2, 8, 4];
arr.splice(1, 2, "new");
console.log(arr);

const players = [
    { username: "zack", score: 45 },
    { username: "anna", score: 75 },
    { username: "mark", score: 20 },
    { username: "bob", score: 75 }
  ];
  
  // Sort players by score in descending order
  
  players.sort((a, b) => b.score - a.score);
  
  
  console.log(players);
  
  
const cities = ["Zürich", "zurich", "München", "Munchen", "Amsterdam"];


// Sort them ignoring accents and case, using German locale

cities.sort((a, b) => a.localeCompare(b, "de", { sensitivity: "base" }));


console.log(cities);