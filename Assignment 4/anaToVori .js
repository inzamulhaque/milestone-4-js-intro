// corvert gold weight ana to vori

function anaToVori(ana) {
    if (typeof ana != "number") {
        return "we just accept numbers. so enter your gold weight in number.";
    }

    if (ana < 0) {
        return "please enter valid gold weight.";
    }
    const vori = ana / 16;
    return vori;
}

const result = anaToVori(16);
console.log(result);