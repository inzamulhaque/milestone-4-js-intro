const products = [
    { name: "A phone", price: 70000 },
    { name: "B phone", price: 60000 },
    { name: "C phone", price: 50000 },
    { name: "D phone", price: 40000 },
    { name: "E phone", price: 30000 },
    { name: "F phone", price: 20000 },
    { name: "G phone", price: 10000 },
    { name: "HP Laptop", price: 34500 },
    { name: "Dell Laptop", price: 50000 },
    { name: "Apple watch", price: 25000 }

];

function searchProducts(products, searchText) {

    const result = [];
    let countProduct = 0;
    for (const product of products) {
        if (product.name.includes(searchText)) {
            result.push(product);
            countProduct++;
        }
    }

    if (countProduct == 0) {
        return `no product match: ${searchText}`;
    }

    return result;
}

console.log(searchProducts(products, "Laptop"));