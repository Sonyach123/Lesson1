// var str = "such a strande string";
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log("Something i wrote"[3].toUpperCase());
// console.log("  Here is new text  ".toUpperCase().trim().concat("!"));

// var str2 = "рядок";
// console.log("str2[4]=" + str2[4]);
// str2 = str2 + "F";
// console.log(str2);

// var string = "Some text as example";
// var res = string.replace(" ", "_");
// console.log(res);
// console.log(string);
// var replaceAll = string.replaceAll(" ", "*");
// console.log(replaceAll);

// var string2 = "Якийсь рядок\nпросто для прикладу";
// var res2 = string.replace(" ", "_");
// console.log(res2);
// console.log(string2);
// var replaceAll2 = string2.replaceAll("\n", " ");
// console.log(replaceAll2);

// var newone = "new varable text";
// // console.log(newone.substr(4));
// console.log(newone.substring(4));
// console.log(newone.slice(4));
// console.log(newone.substring(4, 11));
// console.log(newone.slice(4, 11));

// console.log(String.fromCharCode("1072"));
// console.log("abc".charCodeAt(1));


// const user = {
//     name:"Tanya",
//     surname:"Kuhii",
//     hobbies:{
//         first: "reading",
//         second: "swimming",
//         third: "cooking"
//     }
// };
// console.log(user.name);
// console.log(user["surname"]);

// user.age = 34;
// user.name = "Tanusha";
// console.log(typeof user);
// console.log(user.name + " " + user.surname);
// console.log("user", user);
// // console.log("user" + user); MISTAKE
// console.log("user.age = " + user.age);

// delete user.age;
// console.log("if text goes next? " + user.age);
// console.log(user.hobbies.first);

// var x = 12;
// var obj = {
//     "user name": "Tanya",
//     for: x,
//     "2name": "Kuhii",
//     14: true,
//     "stop!": "stop",
// }
// console.log(obj["user name"]);
// console.log(obj.for);
// console.log(obj[10 + 4]);
// console.log(obj["stop!"]);

// var userNAme = "user name";
// console.log(obj[userNAme]);

// var testObj = {
//     name:"Tanya",
//     lastName:"Kuhii",
//     credentials:{
//         login:"myLogin",
//         password:"myPassword",

//     }
// };
// console.log(testObj.name);
// console.log(testObj.credentials);
// console.log(testObj.credentials.login);

// let userType = "admin";
// let testobj = {
//     name:"Tanya",
//     lastName:"Kuhii",
//     credentials:{
//         login:"myLogin",
//         password:"myPassword",
//     },
//     [userType]: false,
// }
// console.log(testobj);
// console.log(testobj[userType]);

// var group = {
//     name: "QA pro",
//     students: "17",
//     time: "19.15",
//     teachers:{
//         teacher: "Dmytro",
//         mentor: "Hillel",
//     },
//     get studentCount(){
//         return this.students;
//     },
//      set studentCount(count){
//        this.students = count;
//     },
//     teachersInfo: function(){
//         console.log("Teacher is " + 
//             group.teachers.teacher +
//              ", mentor is " + 
//              this.teachers.mentor
//             );
//     },
//     teachersInfo1: function() {
//         return (
//             "Teacher is " + 
//             group.teachers.teacher +
//              ", mentor is " + 
//              this.teachers.mentor
//             );
//         },
//      getName(){
//             return this.name;
//         },
//     setNAme(name){
//             this.name = name;
//         },
// };
// group.teachersInfo();

// console.log(group.teachersInfo1());

// console.log(group.getName());

// group.setNAme("QA pro 2");
// console.log(group.getName());

// console.log(group.studentCount);

// group.studentCount = 44;
// console.log(group.studentCount);

// console.log(group);

// function test(){
//     console.log("test function");
// }
// var x = "String value";
// x = test;
// x();
// console.log("x= " + x);
// console.log("x= ", x);

// function test2(){
//     console.log("TEXT is made");}
//     var user = {
//         login: "root",
//         sayHello:test2,
//     };
// user.sayHello();

var login = "global login";
var surName = "global surname";
var userobj = {
    login: "user login",
    surName: "user surname",
    age:25,
    greet: function(greet1){
        console.log(greet1 + ", object! from " +
             login + " " + surName);
             console.log(greet1 + ", object! from " + userobj.login +
                " " + userobj.surName);
    },
};
userobj.greet("Hello");
        

