// alert("hello")
// console.log(document.getElementById("welcome"));

// function Sum(x, y){
//     return "totalSum" + (x + y)
// }

// let number1=4
// let number2 = 6

// let result = Sum(number1,number2 )
// console.log(result)
// let month = 4
// if (month <= 3) {
//     console.log("spring");
// }
// else if (month >3 && month <=6) {
//     console.log("summer");
// }
// else if (month >6 && month <=9) {
//     console.log("autumn");
// }
// else if (month <=12) {
//     console.log("winter");
// }
// let email ="soheila.afzali@gmail.com"
// let pass = "1234"
// if (email == "soheila.afzali@gmail.com") {
//     console.log("you can login");

// }
// if (email != "soheila.afzali@gmail.com") {
//     console.log("you can't login");
// }

// if (pass == "1234") {
//     console.log("you can login");
// }
// if (pass != "1234") {
//     console.log("you can't login");
// }
// //1 3 5 7 9...//
// for (let i=0; i <20; i++) {
//     console.log(i*2+1);

// }

// // 1 4 9 16 25 36....//
// for (let i=1; i <10; i++) {
//     console.log(i*i);

// }
// for (let i=1; i <=20; i++) {
//     console.log(i + 1);
// }
// let t=1
// while (t<=20) {
//     console.log(t + 1);
//     t++
// }
// let numbers = [19, 12, 13, 14, 10, 17, 20, 15.6, 17]

// // <<<< replace 17 to 18>>>>
// console.log(numbers);
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i]==17) {
//         numbers[i]=18
//     }

// }
// console.log(numbers);

// <<<< length>>>>

// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]);

// }

// <<<< average>>>>
// let sum = 0
// for (let i = 0; i < numbers.length; i++) {
//     console.log(sum+=numbers[i]);

// let sum = 0;
// for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];

// }
// console.log(sum);
// let average=sum/numbers.length

const books = [
  {
    name: "D'une idole",
    author: "Michel Onfary",
    publisher: "le livre de poche",
    PublishYear: "2010",
    language: "Arabic",
    price: "8€",
    availableStores: [
      {
        name: "la FNAC",
        address: { country: "France", city: "Paris/Lyon/Nice" },
      },
      {
        name: "Amazon",
        address: { link: "amazon.fr" },
      },
    ],
  },
  {
    name: "Howard  Hughes",
    author: "Peter Brown",
    publisher: "pocket",
    PublishYear: "1996",
    language: "German",
    price: "7.80€",
    availableStores: [
      {
        name: "la FNAC",
        address: { country: "France", city: "Paris/Lyon/Nice" },
      },
      {
        name: "Amazon",
        address: { link: "amazon.fr" },
      },
    ],
  },

  {
    name: "le grand manipulateur",
    author: "Marc Endeweld",
    publisher: "points",
    PublishYear: "2010",
    language: "Arabic",
    price: "7.70€",
    availableStores: [
      {
        name: "la FNAC",
        address: { country: "France", city: "Paris/Lyon/Nice" },
      },
      {
        name: "le Divan",
        address: { country: "France", city: "Paris", area: 15 },
      },
    ],
  },
  {
    name: "petit traite",
    author: "Sylvain Tesson",
    publisher: "pocket",
    PublishYear: "2005",
    language: "German",
    price: "7.80€",
    availableStores: [
      {
        name: "furet du Nord",
        address: { country: "France", city: "Paris/Lyon/marseille" },
      },
      {
        name: "Gallimard",
        address: { country: "France", city: "Paris/Lyon/marseille/Nice" },
      },
    ],
  },
  {
    name: "cette pute me fera mourir",
    author: "Saint Simon",
    publisher: "le livre de poche",
    PublishYear: "2007",
    price: "7.10€",
    availableStores: [
      {
        name: "la FNAC",
        address: { country: "France", city: "Paris", area: 18 },
      },
      {
        name: "Amazon",
        address: { link: "amazon.fr" },
      },
    ],
  },
];
for (let i = 0; i < books.length; i++) {
  if (books[i].language == "German") {
    console.log("found");
  }
}
books.forEach((element) => {
  if (element.language == "German") {
    console.log("found");
  }
});

books.forEach(function (element) {
  element.availableStores.forEach((item) => {
    if (item.address.country == "France") {
      console.log(element.name + ": found");
    }
  });
});
