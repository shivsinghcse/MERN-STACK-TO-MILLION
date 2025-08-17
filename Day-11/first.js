// console.log("Shiv Singh!")
// var x = 10;
// var y = 12;
// var z = x + y;
// console.log(z);

// if(12 === 13){
//     console.log("Success");
// }else{
//     console.log("Failed");
// }

// const user = {
//     email: 'example@gmail.com',
//     password: '12345'
// }

// console.log(user)

// console.log("one");
// console.log("two");
//  console.log("three");

// console.log("one");
// setTimeout(() => {
//   console.log("two");
// }, 3000);
// console.log("three");

function myCode() {
  return new Promise((resolve, reject) => {
    if (12 === 12) {
      resolve("My code is success");
    } else {
      reject("My code  is failed");
    }
  });
  //   console.log("two");
}
console.log("one");
const x = myCode();
x.then((message) => {
  console.log(message);
}).catch((error) => {
  console.log(error);
});
console.log(x);
console.log("three");
