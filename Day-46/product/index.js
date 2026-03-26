
// import createProduct from "./controller/product.controller.js";

// createProduct()

// import createProduct1 from "./controller/product.controller.js";

// createProduct1()

// import { createProduct, deleteProduct as deleteItem } from "./controller/product.controller.js";

// createProduct()
// deleteItem()

// const product = {
//     title: 'Blue jeans',
//     description: 'hello',
//     price: 2000,
//     discount: 20
// }

// console.log(product.price);

// const {title, description, price: mrp, discount} = {
//     title: 'Blue jeans',
//     description: 'hello',
//     price: 2000,
//     discount: 20
// }

// console.log(mrp);
// console.log(discount);

// const student = {
//     name: 'Shiv Singh', 
//     roll: 12,
//     subject: "maths",
//     address: {
//         city: 'Lucknow',
//         state: 'up',
//         country: 'india'
//     }
// }

// console.log(student.address.city);

// const {address: {city, state}, } = {
//     name: 'Shiv Singh', 
//     roll: 12,
//     subject: "maths",
//     address: {
//         city: 'Lucknow',
//         state: 'up',
//         country: 'india'
//     }
// }

// console.log(city);
// console.log(state);

// const num = [1, 2, 3, 4, 5]
//   console.log(num[1]) // 2

// const [x] = [1, 2, 3, 4, 5]
// console.log(x) // 1

// const [a, ,b] = [1, 2, 3, 4, 5]
// console.log(a, b) // 1 3


//   let name = "Bob"
//   let age = 22

//   // using + operator
//   let intro1 = "Hello my name is " + name + " and i am "+ age + " years old."
  
//   console.log(intro1)

//   // using template string
//   let intro = `Hello my name is ${name} and i am ${age} years old`
//   console.log(intro)

const products = [
  {
    "id": 1,
    "name": "Wireless Mouse",
    "price": 499,
    "category": "Electronics",
    "inStock": true
  },
  {
    "id": 2,
    "name": "Bluetooth Headphones",
    "price": 1299,
    "category": "Electronics",
    "inStock": true
  },
  {
    "id": 3,
    "name": "Running Shoes",
    "price": 2499,
    "category": "Footwear",
    "inStock": false
  },
  {
    "id": 4,
    "name": "Backpack",
    "price": 899,
    "category": "Accessories",
    "inStock": true
  },
  {
    "id": 5,
    "name": "Smart Watch",
    "price": 1999,
    "category": "Electronics",
    "inStock": true
  }
]

const result = products.filter(product => {
    return product.price >= 999
})

// console.log(x);

const num1 = [1, 2, 3]
const num2 = [4, 5, 6]
const number = [...num1, ...num2]
console.log(number);