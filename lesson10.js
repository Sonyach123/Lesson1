var str = "миші, щури, хомєяки, знову миші";
var re = /щури/;
console.log(typeof re);
console.log(str.search(re));
console.log(str.search(/кіт/));
console.log(re.test(str));

var email1 = "vasys@gmail.com";
var email2 = "petya@yahoo.com";
var re = /@gmail|@yandex/;
console.log(email1 + ":" + email1.search(re));
console.log(email2 + ":" + email2.search(re));

console.log("1st email test" + ":" + re.test(email1));
console.log("2st email test" + ":" + re.test(email2));
