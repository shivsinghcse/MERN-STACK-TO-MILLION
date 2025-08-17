function myCode() {
  return new Promise((resolve, reject) => {
    if (12 !== 12) {
      resolve("Two");
    } else {
      reject("My code  is failed");
    }
  });
  //   console.log("two");
}

// async function main() {
//   try {
//     console.log("one");
//     const x = await myCode();
//     console.log(x);
//     console.log("three");
//   } catch (err) {
//     console.log(err);
//   }
// }

// main();

// Resolving Promise async

// const x = myCode();
// // console.log(x);
// x.then((data) => {
//   console.log(data);
// }).catch((err) => {
//   console.log(err);
// });

// console.log("Hello")

async function demo() {
  try {
    const x = await myCode();
    console.log(x);
  } catch (err) {
    console.log(err);
  } finally{
    console.log("complted")
  }
}

demo();
console.log("Hello")
