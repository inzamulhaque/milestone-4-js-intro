// odd friend
function oddFriend(array) {
    if (Array.isArray(array) == false) {
        return "please give me array";
    }

    if (array.length <= 0) {
        return "please don't give me empty array";
    }

    for (const element of array) {
        if (element.length % 2 != 0) {
            return element;
        }
    }

    return "I've no odd friend";

}

const friendsName = ["MD IH Alif", "MD Karia", "MD MH Hridoy", "Ahad", "Roman", "Alif"];

const result = oddFriend(friendsName);

console.log(result);