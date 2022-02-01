var color = "blue";

// if (color == "red") {
//     console.log(color);
// } else if (color == "blue") {
//     console.log(color);
// } else if (color == "black") {
//     console.log(color);
// } else {
//     console.log("color not match");
// }

switch (color) {
    case "red":
        console.log(color);
        break;
    case "black":
        console.log(color);
        break;
    case "blue":
        console.log(color);
        break;
    case "white":
        console.log(color);
        break;

    default:
        console.log("color not match");
        break;
}