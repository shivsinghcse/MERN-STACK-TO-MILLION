function myCode(){
    return new Promise((resolve, reject) => {
        if(12 === 12){
            resolve("Equal")
        }else{
            reject("not equal")
        }
    })
}

console.log("one");
const result = myCode()
result
.then((data) => {
    console.log(data);
})
.catch((err) => {
    console.log(err); 
})
console.log("three");

class xxx {
    constructor(w){
        console.log(`hello ${w}`);
    }

    demo(){
        console.log("demo");
    }
}

const x = new xxx('world')
x.demo()