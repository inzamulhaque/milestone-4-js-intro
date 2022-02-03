const products = [
    { name: "laptop", price: 33000 },
    { name: "shirt", price: 500 },
    { name: "watch", price: 1100 },
    { name: "phone", price: 12000 },
    { name: "tv", price: 23000 }
];

function total(array) {
    let total = 0;
    for (const product of products) {
        total += product.price;
    }

    return total;
}

console.log(total(products));