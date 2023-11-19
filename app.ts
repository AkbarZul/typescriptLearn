// let message: string = "Hello Typescript!"

// let heading = document.createElement("h1")

// heading.textContent = message

// document.body.appendChild(heading)

interface product {
  id: number;
  name: string;
  price: number;
}

function getProduct(id): product {
  return {
    id: id,
    name: `Awsome Gadget ${id}`,
    price: 99.5,
  };
}

const showProduct = (name: string, price: number) => {
  console.log(`The Product ${name} cost ${price}`);
};

const product = getProduct(1);
showProduct(product.name, product.price);

// let variablename: type;
// let variablename: type = value;
// const variablename: type = value;
// let arrayName: type[]

let counter: number;
counter = 1;

let counter2: number = 1;

let names: string = "John Doe";
let age: number = 12;
let active: boolean = true;
let user: string[] = ["John", "Doe", "Pater"];

let person: {
  name: string;
  age: number;
};

person = {
  name: "David",
  age: 12,
};

// let greeting : (name: string) => string

// greeting = function(name: string) {
//     return `Hi ${name}`
// }

// greeting = function() {
//     console.log("Hello");
    
// }

