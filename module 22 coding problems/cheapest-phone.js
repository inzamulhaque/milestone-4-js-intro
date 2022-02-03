const phones = [
    {
        name: "a",
        price: 10000,
        camera: "10mp",
        ram: "4gb",
        rom: "64gb"
    },
    {
        name: "b",
        price: 9000,
        camera: "10mp",
        ram: "4gb",
        rom: "64gb"
    },
    {
        name: "c",
        price: 15000,
        camera: "10mp",
        ram: "4gb",
        rom: "64gb"
    },
    {
        name: "d",
        price: 7000,
        camera: "10mp",
        ram: "4gb",
        rom: "64gb"
    },
    {
        name: "e",
        price: 17000,
        camera: "10mp",
        ram: "4gb",
        rom: "64gb"
    }
];

function cheapPhone(array) {
    let cheapPrice = array[0].price;
    let cheapPhoneObj = array[0];
    for (const phone of array) {
        const price = phone.price;
        if (price < cheapPrice) {
            cheapPrice = price;
            cheapPhoneObj = phone;
        }
    }

    console.log(cheapPrice);
    return cheapPhoneObj;
}

console.log(cheapPhone(phones));