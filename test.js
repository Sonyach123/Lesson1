// var x;
// var n = null;
// var res = false | n || x || "prosto ryadok" || (x=5) | true;
// console.log(res);
// console.log(x);

// console.log(!true);
// console.log(!false);
// console.log(!"");
// console.log(!0);
// console.log(!null);
// console.log(!underfined);

let text = String(null);
console.log(text);
console.log(typeof text);

let number = Number("4");
console.log(number, typeof number);

let number1 = Number("4");
console.log(+"4", typeof number1);

let birthday = 25;
let discount;
if (birthday ===25) {
    discount = "30%";
} else{
    discount ="10%";
}
console.log(discount);

console.log(true ?? false);
console.log(false ?? true);
console.log(null ?? true);
console.log("Hillel" ?? false);

let salary = 1000;
if (salary < 1000) {
    console.log ("small zp");
} else if (salary === 1000) {
    console.log ("better");
} else{
    console.log("super");
}