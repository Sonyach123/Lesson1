let houseAddress = {
    country: "Ukraine",
    city: "Kiev",
    street:"Khreshchatyk",
    getFullAddress: function() {
   console.log("My address is country:", 
    houseAddress.country,
    ", city:",
    houseAddress.city,
    ", street:",
    houseAddress.street
);
}
    }

    houseAddress.getFullAddress();


    console.log("hex FF=" + 0xFF);


let a = "qwerty";
console.log(a);
console.log(isNaN(a));
console.log(isNaN(undefined));
console.log(isNaN(NaN));
console.log(isNaN("qwerty"));
console.log(isNaN(10));
console.log(isNaN(null));

var rnd = Math.random();
rnd = rnd * 100;
console.log(rnd); 
rnd = Math.floor(rnd);
console.log(rnd);

var s = 0.1+0.2;
var round = s.toFixed(20);
console.log(s ===0.3, round===0,3);
console.log("till 10 symbol: s = " + s.toFixed(10));
console.log("till 20 symbol: s = " + s.toFixed(20));
console.log(0.3 === s.toFixed(1));
console.log(Number.isFinite(s.toFixed()));
console.log(0,3 === Number.parseFloat(s.toFixed(1)));

import NP from 'number-precision'
NP.strip(0.09999999999999998); // = 0.1
console.log(NP.plus(0.1, 0.2)); // = 0.3, not 0.30000000000000004
NP.plus(2.3, 2.4);             // = 4.7, not 4.699999999999999
NP.minus(1.0, 0.9);            // = 0.1, not 0.09999999999999998
NP.times(3, 0.3);              // = 0.9, not 0.8999999999999999
NP.times(0.362, 100);          // = 36.2, not 36.199999999999996
NP.divide(1.21, 1.1);          // = 1.1, not 1.0999999999999999
NP.round(0.105, 2);            // = 0.11, not 0.1



var l = "this is a string with a \b backspace character";
console.log(l);
var l2 = "this is a string with a \t tab character";
console.log(l2);
var l3 = "this is a string with a \n new line character";
console.log(l3);
var l4 = "this is a string with a \r carriage return character";
console.log(l4);
var l5 = "this is a string with a \f form feed character";
console.log(l5);
var l6 = "this is a string with a \u00A9 unicode character";
console.log(l6);

var something = "Some text string I test";
console.log(something.charAt(5));
console.log(something);

const any = "SOMETHING YEAH ";

const repeatAny = any.repeat(15).charAt(10).toLowerCase();

console.log(repeatAny);

console.log(any.includes("S"));
console.log(any.includes("s"));
console.log(any.includes("S", 0));
console.log(any.includes("S", 5));

console.log(any.lastIndexOf("O") === 7);

console.log(any.indexOf("O"));
console.log(any.indexOf("o"));
console.log(any.indexOf("O", 0));
console.log(any.indexOf("O", 5));

console.log("    hello".trimStart());
console.log("hello    ".trimEnd());
console.log("  hello   ".trim());
