// function some(arg1, arg2){
// console.log(arg1,arg2);
// console.log("it works!")
// }

// some(3,7);

// function squarecalculation(){
//     let a=5
// console.log(a*a);
// }

// squarecalculation();

// let b = function(){
//     console.log (2*2);
// ;}
// console.log(b)

pow();
let trainfunction = function(){
    console.log("train function works");
}
trainfunction();

function squarecalculation1(arg1,arg2){
    
}
pow();
function pow(){
    console.log("hi from function")
}
pow();

var ext = "outside text";

function lessonexample(){
    var inner = "inner function text";
    console.log("function sees outside: " + ext);
    console.log("function sees inside: " + inner);
}
lessonexample();

function varchangessduringfunction(){
    console.log("before change: " + myVar);
    myVar = "I am this";
    console.log("after change: " + myVar);
    var myVar;
} 
varchangessduringfunction();
let x;
function hometask(base,limit){
    for (let x = 0; x < limit; x++) {
     base *= base;
     console.log("inside cycle x = " + x);   
    }
    console.log("outside cycle x = " + x);
}
hometask(2, 5);