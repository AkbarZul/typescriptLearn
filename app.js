// let message: string = "Hello Typescript!"
function getProduct(id) {
    return {
        id: id,
        name: "Awsome Gadget ".concat(id),
        price: 99.5
    };
}
var showProduct = function (name, price) {
    console.log("The Product ".concat(product.name, " cost ").concat(product.price));
};
var product = getProduct(1);
showProduct(product.name, product.price);
