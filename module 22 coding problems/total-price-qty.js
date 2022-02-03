const products = [
    { name: "laptop", price: 33000, qty: 1 },
    { name: "shirt", price: 500, qty: 3 },
    { name: "watch", price: 1100, qty: 2 },
    { name: "phone", price: 12000, qty: 1 },
    { name: "tv", price: 23000, qty: 1 }
];

function total(array) {
    let total = 0;
    for (const product of products) {
        total += (product.price * product.qty);
    }

    return total;
}

console.log(total(products));