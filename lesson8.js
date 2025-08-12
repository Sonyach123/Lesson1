function drawTriangle(height, symbol){
    for (let i = 1; i <= height; i++) 
    {
        let spaces = " ".repeat(height - i);
        let symbols = symbol.repeat(2*i-1);
        console.log(spaces + symbols);
    }
}
drawTriangle(9, "*");
// 
function customPow (base, exponent) {
    if (exponent === 0) return 1;
    if (base === 0) return 0;

    let result = 1;
    let adsExponent = Math.abs(exponent);

    let count = 0;
    while (count < adsExponent) {
        result *= base;
        count++;
    }
    if (exponent < 0) {
        return 1 / result;
        
    }
    return result;
}

console.log(customPow(2, 3)); 
// 

function customPow2(base, exponent) {
    let tempValue = 1;
    let count = 0;
    while (count < exponent){
        tempValue *= base;
        count++;
    }
    return tempValue;
}

console.log(customPow2(2, 3));

// 

let city = {
    name: "Odessa",
    population: 993120,
    square: 162.42,
    getInfo(){
        for (const key in this) {
            if (typeof this[key] === "function") continue;
           console.log(key + ": " + this[key]); 
        }
    },
};

city.getInfo();
city.country = "Ukraine";
city.getInfo();

//

var services = {
    haircut: "60 UAN",
    manicure: "50 UAN",
    "pedicure": "70 UAN",
//     maxPrice: function() {
//         let max = 0;
//         for (let key in this) {
//             if (typeof this[key] === 'string' ){
//                 let price = parseInt(this[key]);
//                 if (price > max) {
//                     max = price;
//                 }
//             } 
//     }
//         return max;
//     },
//     minPrice: function() {
//         let min = Infinity;
//         for (let key in this) {
//             if (typeof this[key] === 'string' ){
//                 let price = parseInt(this[key]);
//                 if (price < min) {
//                     min = price;
//                 }
//             } 
//         }
//         return min;
//     },

//     averagePrice: function() {
//         let total = 0;
//         let count = 0;
//         for (let key in this) {
//             if (typeof this[key] === 'string' ){
//                 total += parseInt(this[key]);
//                 count++;
//             } 
//         }
//         return total / count;
//     },
};

let total = 0;
let prices = [];
for (let key in services){
    let rawValue = services[key];
    let price = parseInt(rawValue);
    prices.push(price);
    total += price;
}

services.price = function() {
    let minNumber = Math.min(...prices);
    let maxNumber = Math.max(...prices);
    return {
        min: minNumber,
        max: maxNumber,
        total: total,
    };
};

const result = services.price();
console.log("Total price: " + result.total);
console.log("Min price: " + result.min);
console.log("Max price: " + result.max);

// 

const someServices = {
    service1: "Massage",
    service2: "Facial",
    "service3": "Haircut",
    price() {},
};
someServices["12345678987654"] = "150 UAN";
console.log(someServices.price);
console.log(someServices);