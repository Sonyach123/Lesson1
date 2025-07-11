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

let birthday1 = 25;
let discount1 = birthday1 === 25 ? "30%" : "10%";
console.log(discount1);

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

let sex = "male";
let birthday2 = 25;
let discount2;
if ( sex === "male") {
    discount2 = birthday2 === 25 ? "30%" : "10%";
} else if ( sex === "female") {
 discount2 = birthday2 === 19 ? "30%" : "10%"; 
} else {
    discount2 = birthday2 === 7 ? "10%" : "5%";
}
