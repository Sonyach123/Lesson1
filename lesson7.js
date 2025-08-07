// var str = "such a strande string";
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log("Something i wrote"[3].toUpperCase());
// console.log("  Here is new text  ".toUpperCase().trim().concat("!"));

var str2 = "рядок";
console.log("str2[4]=" + str2[4]);
str2 = str2 + "F";
console.log(str2);

var string = "Some text as example";
var res = string.replace(" ", "_");
console.log(res);
console.log(string);
var replaceAll = string.replaceAll(" ", "*");
console.log(replaceAll);

var string2 = "Якийсь рядок\nпросто для прикладу";
var res2 = string.replace(" ", "_");
console.log(res2);
console.log(string2);
var replaceAll2 = string2.replaceAll("\n", " ");
console.log(replaceAll2);

var newone = "new varable text";
// console.log(newone.substr(4));
console.log(newone.substring(4));
console.log(newone.slice(4));
console.log(newone.substring(4, 11));
console.log(newone.slice(4, 11));

console.log(String.fromCharCode("1072"));
console.log("abc".charCodeAt(1));
