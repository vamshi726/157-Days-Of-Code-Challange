"use strict";
;
function isLegal(user) {
    if (user.age > 18) {
        return true;
    }
    else {
        return false;
    }
}
function greet(user) {
    console.log("hi there " + user.firstName);
}
const val = isLegal({
    firstName: "vamshi",
    lastName: "m",
    age: 20,
});
console.log(val);
