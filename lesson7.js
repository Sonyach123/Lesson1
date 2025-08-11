var str = "such a strande string";
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log("Something i wrote"[3].toUpperCase());
console.log("  Here is new text  ".toUpperCase().trim().concat("!"));

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


// 

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


// 


const user = {
    name:"Tanya",
    surname:"Kuhii",
    hobbies:{
        first: "reading",
        second: "swimming",
        third: "cooking"
    }
};
console.log(user.name);
console.log(user["surname"]);


// 

user.age = 34;
user.name = "Tanusha";
console.log(typeof user);
console.log(user.name + " " + user.surname);
console.log("user", user);
// console.log("user" + user); MISTAKE
console.log("user.age = " + user.age);

delete user.age;
console.log("if text goes next? " + user.age);
console.log(user.hobbies.first);

// 

var x = 12;
var obj = {
    "user name": "Tanya",
    for: x,
    "2name": "Kuhii",
    14: true,
    "stop!": "stop",
}
console.log(obj["user name"]);
console.log(obj.for);
console.log(obj[10 + 4]);
console.log(obj["stop!"]);

var userNAme = "user name";
console.log(obj[userNAme]);

// 

var testObj = {
    name:"Tanya",
    lastName:"Kuhii",
    credentials:{
        login:"myLogin",
        password:"myPassword",

    }
};
console.log(testObj.name);
console.log(testObj.credentials);
console.log(testObj.credentials.login);

// 

let userType = "admin";
let testobj = {
    name:"Tanya",
    lastName:"Kuhii",
    credentials:{
        login:"myLogin",
        password:"myPassword",
    },
    [userType]: false,
}
console.log(testobj);
console.log(testobj[userType]);

// 

var group = {
    name: "QA pro",
    students: "17",
    time: "19.15",
    teachers:{
        teacher: "Dmytro",
        mentor: "Hillel",
    },
    get studentCount(){
        return this.students;
    },
     set studentCount(count){
       this.students = count;
    },
    teachersInfo: function(){
        console.log("Teacher is " + 
            group.teachers.teacher +
             ", mentor is " + 
             this.teachers.mentor
            );
    },
    teachersInfo1: function() {
        return (
            "Teacher is " + 
            group.teachers.teacher +
             ", mentor is " + 
             this.teachers.mentor
            );
        },
     getName(){
            return this.name;
        },
    setNAme(name){
            this.name = name;
        },
};
group.teachersInfo();

console.log(group.teachersInfo1());

console.log(group.getName());

group.setNAme("QA pro 2");
console.log(group.getName());

console.log(group.studentCount);

group.studentCount = 44;
console.log(group.studentCount);

console.log(group);
// 



function test(){
    console.log("test function");
}
var x = "String value";
x = test;
x();
console.log("x= " + x);
console.log("x= ", x);

function test2(){
    console.log("TEXT is made");}
    var userOk = {
        login: "root",
        sayHello:test2,
    };
userOk.sayHello();


// 
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

 
//  
var user1 = {
    login: "Vasya",
    age: 25,
    getInfo: function(){
        console.log("my name is: " + this.login + ", my age " + this.age);
    },
};

var user2 = {
    login: "Petya",
    age: 30,
    admin: true,
};

function some1(a){
    console.log("login: " +a.login + "\nage: " + a.age);
}

function some2(){
    console.log("login: " +this.login + "\nage: " + this.age);
}
some1(user1);
some2.call(user1);
user2.getInfo = user1.getInfo;
user1.getInfo();
user2["getInfo"]();

console.log("lets check admin property");
if("admin" in user2)console.log("user2 is admin");
    else console.log("user2 is not admin");
if("admin" in user1)console.log("user1 is admin");
else console.log("user1 is not admin");    


// 
var objNewOne = {
    0:"a",
    1:"b",
    2:"c",
    3:"d",
    7:"another",
    x: 12, 
    y: 34,
    z: 45,
};

// for (let i = 0; i in objNewOne; i++){
//     console.log(i + ": " + objNewOne[i]);
// } MISTAKE

for (let key in objNewOne){
    console.log(key + ": " + objNewOne[key]);
}


// 
var customer = {
    name:"Petya",
    age: 32,
    admin:true,
    // set method(name){
    //     console.log("set Test method called");
    // }
};
var b = customer;
for (const i in b){
console.log(b[i]);
}
b.admin = false;
customer.age = 105;
// console.log("customer: " + customer.name + ", age: " + customer.age + ", admin: " + customer.admin);
console.log(b);
console.log(customer);

console.log(JSON.stringify(customer));
let clone = JSON.parse(JSON.stringify(customer)); 
clone.age = 23;
customer.age = 234;
console.log(clone);
console.log(customer);

// 
const group23 = {
    groupname: "QA pro",
    students: 17,
    time: "19.15",
    teachers:{
        teacher: "Dmytro",
        mentor: "Hillel",
    },
print: function() {
    console.log("Group name: " + this.groupname);    
},
get studentCount(){
    return this.students;
},
set count(count){
    this.students = count;
},
};
let keys = Object.keys(group23);
console.log(keys);

let values = Object.values(group23);
console.log(values);

let allInfo = Object.entries(group23);
console.log(allInfo);

// 
var obj23 = {
    go: function() {
        console.log(this);
    },
};
obj23.go();

//

const obj24 = Object.freeze({
     name: "Sam",
     age: 45,
});
console.log(Object.isSealed(obj24))
// obj24.age = 50; тут буде помилка, бо об'єкт заморожений
console.log(obj24); 

// 



const obj25 = {
     name: "Sam",
     age: 45,
};
console.log(Object.isSealed(obj25))
obj25.age = 50; 
console.log(obj25); 