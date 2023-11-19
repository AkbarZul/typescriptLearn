// let message: string = "Hello Typescript!"

// let heading = document.createElement("h1")

// heading.textContent = message

// document.body.appendChild(heading)

interface product {
    id: number,
    name: string,
    price: number
}

function getProduct(id) : product {
    return {
        id: id,
        name: `Awsome Gadget ${id}`,
        price: 99.5
    }
}

const showProduct = (name: string, price: number) => {
    console.log(`The Product ${name} cost ${price}`)
}

const product = getProduct(1);
showProduct(product.name, product.price);