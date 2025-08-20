console.log("undefined > 0", undefined > 0);
console.log("undefined < 0", undefined < 0);
console.log("undefined === 0", undefined === 0);
console.log("undefined >= 0", undefined >= 0);

var foo = 1;
if (foo) {
    console.log("foo is truthy");
}
console.log(foo);
console.log (foo = foo +1);
console.log(foo);
console.log (++foo);
console.log(foo);

//

var o = ["oleg", 15, "Igor"]; // масив
o[3] = "Vasya";
o[0] = "Olena"; // добавляем элемент в массив
console.log(o + "   " + o.length); // выводим массив и его длину
delete o[2]; // better not to use
console.log(o);
console.log(o[2]); // undefined, т.к. элемент удален


var arr1 = [1, 2, 3];
var arr2 = arr1; // ссылка на тот же массив
arr2[0] = 10; // изменяем первый элемент
console.log(arr1); 
console.log(arr2); // оба массива изменились, т.к. это одна ссылка

var a = [1, 2, 3];
var b = JSON.parse(JSON.stringify(a)); // создаем копию массива
b[0] = 10; // изменяем первый элемент
console.log(a); // оригинальный массив не изменился
console.log(b); // измененный массив 
//
var arr3 = ["a", "b", "c"];
console.log(typeof arr3); // "object"

var notArr = {
    0: "a",
    1: "b",
    2: "c",
    length: 3,
};
console.log(typeof notArr); // "object"
console.log(Array.isArray(arr3)); // true
console.log(Array.isArray(notArr)); // false

//

var arr5 = ["first", "second", "third"];
arr5[5] = "fifth"; // добавляем элемент с индексом 5
for (let i = 0; i < arr5.length; i++) {
    console.log("arr5" + "[" + i + "] = " + arr5[i]);
}

//

var arr6 = ["first", "second", "third"];
arr6[11] = "eleventh";
arr6.someNew = "new property"; 
for (let i in arr6){
    console.log("arr6 [" + i + "] = " + arr6[i]);
}

console.log("arr6 length: " + arr6.length); // 12, т.к. есть элемент с индексом 11
//
var newArr = [1, 2, 3, 4, 5];
console.log("toString: " + newArr.toString()); 
console.log("join without params: " + newArr.join());
console.log("join with params: " + newArr.join(" "));

//
var arrrr = {
    0: "a",
    1: "b",
    2: "c",
    length: 3,
};
var str = arrrr.toString(); 
console.log(str);
console.log(typeof str); 

//

var str55 = "Long some string. And some more text.";
var arr55 = str55.split(".")[0].concat("."); // разбиваем строку на массив по пробелам
console.log(arr55);

var c = [1,2];
var v = [3,4];
var d = c.concat(v); // объединяем массивы
console.log(d); 
var resss = c.concat("five", true, 6);
console.log(resss); // объединяем массив с другими значениями

var arr7 = ["Ivan", "Petro", "Oleg", "Olena"];
console.log(arr7.indexOf("Petro")); // ищем индекс элемента 
console.log(arr7.lastIndexOf("Vadim")); // ищем последний индекс элемента 
var NEWaRR7 = arr7.slice(1, 3);
var NEWaRR72 = arr7.slice();
var NEWaRR71 = arr7.slice(1);  
console.log("arr7=" + arr7);
console.log("arr7=", arr7);
console.log("newArr7=" + NEWaRR7);
console.log("newArr71=" + NEWaRR71);
console.log("newArr72=" + NEWaRR72);

//

var arr8 = [1, 2, 43, 7, 23, 15];
arr8.reverse(); // изменяет исходный массив
console.log(arr8); // выводит массив в обратном порядке
console.log(arr8.join(" ")); // выводит массив в виде строки с пробелами
console.log("before sort " + arr8);
arr8.sort(); // сортирует массив по умолчанию
console.log("after sort " + arr8); // выводит отсортированный массив
arr8.sort(myCompare); 
console.log("after my compare1 sort " + arr8);
arr8.sort(myCompare2);
console.log("after my compare2 sort " + arr8);

function myCompare(element1, element2) {
    return element1 - element2; // сортирует массив по возрастанию
    }

    function myCompare2(element1, element2) {
    return element2 - element1; // сортирует массив по убыванию
    }

    //

    var arr9 = [13, 2, 5, 7, 1];
    arr9.sort((a, b) => {
        return a - b;
    }); // сортирует массив по возрастанию
    console.log("after sort arr9 " + arr9); // выводит отсортированный массив

    //

    const fruits = ["apple", "banana", "cherry"];
    fruits.sort();
    console.log("Sorted fruits: " + fruits); // сортирует массив строк по алфавиту
//

var mixedArr = [1, "apple", 3, "banana", 2];
console.log("Before sorting: " + mixedArr);
var v = mixedArr.pop();
console.log("v= " + v + "\nmixedArr now looks like: " + mixedArr);
var m = mixedArr.push(11,12,16);// повертає dовжину масиву
console.log("m= " + m + "\nmixedArr now looks like: " + mixedArr);
var c = mixedArr.shift(); // втрачений елемент
console.log("c= " + c + "\nmixedArr now looks like: " + mixedArr);
var p = mixedArr.unshift(1,2);
console.log("\nmixedArr now looks like: " + mixedArr);
var d = mixedArr.splice(1,2);
console.log("d now looks like: ", d);
console.log("\nmixedArr now looks like: ", mixedArr);

//

var arr10 = [1,2,3,4,5];
console.log ("atart arrey = " + arr10);

var resaltOfIt = arr10.splice(2,2,"a","b");
console.log("res= " + resaltOfIt + "\narr in this 1test " + arr10);

var resaltOfIt = arr10.splice(arr10.indexOf(4),arr10.indexOf(7),"a","b");
console.log("res= " + resaltOfIt + "\narr in this 2test " + arr10);

//

var arr11 = [2.0, 4.0, 8, 8 ];
var ressss = arr11.map((v) =>{
    return "tc_" + v;
});
console.log(arr11);
console.log(ressss);

//

var arr12 = [2.0, 4.9, 8, 8 ];
var resss1 = arr12.map((v) =>{
    return Math.floor(v);
});
console.log(arr12);
console.log(resss1);

//

var arr13 = [2.0, 4.7, 8, 8 ];
var resss2 = arr13.map((v) =>{
    return Math.round(v);
});
console.log(arr13);
console.log(resss2);

//

var arrey00 = [2, 8, 4, 12, 34, 3, 51];
var result00 = arrey00.filter(checker);
console.log("arrey = " , arrey00);
console.log("result=" , result00);
 
function checker(item){
    return item > 2;
};

//
var arrey01 = [2, 8 ,4, -2, 34, 3, 51];
console.log("arrey01="+ arrey01);

console.log("is every positive=", arrey01.every(checker));
console.log("is some positive=", arrey01.some(checker));

