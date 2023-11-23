// // let message: string = "Hello Typescript!"

// // let heading = document.createElement("h1")

// // heading.textContent = message

// // document.body.appendChild(heading)

// interface product {
//   id: number;
//   name: string;
//   price: number;
// }

// function getProduct(id): product {
//   return {
//     id: id,
//     name: `Awsome Gadget ${id}`,
//     price: 99.5,
//   };
// }

// const showProduct = (name: string, price: number) => {
//   console.log(`The Product ${name} cost ${price}`);
// };

// const product = getProduct(1);
// showProduct(product.name, product.price);

// // let variablename: type;
// // let variablename: type = value;
// // const variablename: type = value;
// // let arrayName: type[]

// let counter: number;
// counter = 1;

// let counter2: number = 1;

// let names: string = "John Doe";
// let age: number = 12;
// let active: boolean = true;
// let user: string[] = ["John", "Doe", "Pater"];

// const arrays: Array<string> = ["a", "b", "c"]

// console.log(arrays);

// let person: {
//   name: string;
//   age: number;
// };

// person = {
//   name: "David",
//   age: 12,
// };

// // let counter: number = 1

// function setCounter (counter: number) {
//     return counter++
// }

// // same ad setCounter
// function increment (counter: number) : number {
//     return counter++
// }

// function parameter
function logAgeandName(age: number, name = "anonymous") {
  console.log(`${name}, age ${age}`);
}

logAgeandName(0);

// function optional parameter
function logFavoriteNumberAndReason(favorite: number, reason?: string) {
  console.log(`Favorite: ${favorite}`);

  if (reason) {
    console.log(`Because: ${reason}`);
  }
}

logFavoriteNumberAndReason(7, "test doang");

// return types
function getRandomFriend(fallback: string) {
  switch (Math.floor(Math.random() * 5)) {
    case 0:
      return "Josh";
    case 1:
      return "sara";
    case 2:
      return "sonny";
    default:
      return fallback;
  }
}

const friend = getRandomFriend("Codey")

function fibonacci(i: number): number {
  if (i <= 1) {
    return i
  }

  return fibonacci(i-1) + fibonacci(i-2)
}

console.log(fibonacci(4));

// Function Types
let value = 0
function withIncrementedValue(receiveNewValue: (newValue: number) => void) {
  value += 3;
  receiveNewValue(value)
}

withIncrementedValue((receivedValue) => {
  console.log("Got", receivedValue);
  
})

// Generics
interface Box<value> {
  value: value
}

let numberBox: Box<number> = { value: 7 }
let stringBox: Box<string> = { value: "test" }

console.log(numberBox.value);
console.log(stringBox.value);

// Inferring Generic Type

function logAndReturnValue<value>(value: value) : value {
  console.log(value);
  return value
  
}

const result = logAndReturnValue(new Date("2023-12-21"))

console.log(result);
