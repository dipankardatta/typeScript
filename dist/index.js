"use strict";
let sales = 123456789;
let course = "TypeScript";
let is_published = true;
let level;
let numbers = [1, 2, 3];
numbers.forEach((n) => n * 2);
let user = [1, "Dipankar"];
var Size;
(function (Size) {
    Size[Size["small"] = 1] = "small";
    Size[Size["medium"] = 2] = "medium";
    Size[Size["large"] = 3] = "large";
})(Size || (Size = {}));
let mySize = Size.medium;
console.log(mySize);
function calculateTax(income, taxYear) {
    return (income += income + (taxYear || 303));
}
calculateTax(4000);
let employee = {
    id: 1,
    name: "Dipankar",
    retire: (date) => {
        console.log(date);
    },
};
function kgToLbs(weight) {
    if (typeof weight === "number") {
        return weight * 2.2;
    }
    else {
        return parseInt(weight) * 2.2;
    }
}
kgToLbs(10);
kgToLbs("10Kg");
//# sourceMappingURL=index.js.map