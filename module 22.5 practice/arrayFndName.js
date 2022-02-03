function bestFriend(arr) {
    let friendName = "";
    for (const element of arr) {
        if (element.length > friendName.length) {
            friendName = element;
        }
    }
    return friendName;
}

const friends = ["alif", "karia", "md ih alif", "hridoy", "ahad"];
console.log(bestFriend(friends));