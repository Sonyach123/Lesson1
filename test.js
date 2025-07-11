var x;
var n = null;
var res = false | n || x || "prosto ryadok" || (x=5) | true;
console.log(res);
console.log(x);

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

var a = 8;
switch (a) {
    case 1:
        console.log ("var 1");
        break;
    case 2:
        console.log ("var2");
        break;
    default:
        console.log("default")
}

if (true) {
    let ax =5;
}
let ax =5; 


var num= 10;
if (number % 10 ===0){
    console.log ("it is " + num + " devided on 2");
} else{
    console.log ("is is " + num + " not devided on 2")
}


var y = 0;
while (y < 10) {
    console.log ("i=" + y++);
}

var y1 = 0;
while (y1 < 15) { y1++;
}
console.log("y1=", y1)