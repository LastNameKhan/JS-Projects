// Variables
// The statement below creates/declares a variable with the name "message"
let message;
message = "Hello World This is let"
//The string is now saved into memory area associated with the variable
//We can access it using variable name
console.log(message)

//We can also declare multiple variables on one line:
let user = "John", age = 2, text = "Hello";

//Changing the value of let

let data;
data = "newdata";
console.log(data,"Data first value")
data = "WorldData"; //Value change
console.log(data,"Data Second value")
//When the value is changed the old data is
//removed from the varible

//We can also declare two varibales and copy data from one into the other.
let hello = "Hello World"
let newmessage;
//Copy 'Hello World' from hello into newmessage
newmessage = hello;
console.log(newmessage,"Copied Data variable")
console.log(hello,"Original Data varibale")

//Declaring twice triggers an error
//A variable should be declared only once
//A Repeated declaration of the same variable is an error:

//Variable naming:
//1. The first name must contain only letters,digits,
// or the symbols $ and _.
//2. The first character must not be a digit.

//let userName;
//let test123;

//Varibales name apple and APPLE are two differnt variables.
//Non - latin words are allowed, but not recommended

//Constants
//To declare constantss(unchanging) varibale, use const instead of let;

const myBirthday = "29.05.1997";
// myBirthday = "01.01.1997" 
//Error that can't reassign the constant!
console.log(myBirthday)

//Uppercase constants

const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";

//when we need to pick a color
let color = COLOR_ORANGE;
console.log(color,"Getting value from const")

// Declare two variables: admin and name.
// Assign the value "John" to name.
// Copy the value from name to admin.
// Show the value of admin using alert (must output “John”).

let admin,name;
name = "John";
admin = name;
console.log(admin,"admin")

//Data Types
//Number
//The number type represents both integer and
//floating point numbers

//Infinity represents the mathematically  infinity.It is special value
//that is greater than any number.
//We can get it as a result of division by zero:
console.log(1/0) //It will give us Infinity
//Or we can just reference it directly 
console.log(Infinity)

//NaN represents a computational error.It is a
//result of an incorrect or an undefined mathematical
//operation, for instance:
console.log("not a number"/2); //NaN such divisions are erroneous
//NaN is sticky.Any further mathematical operation on NaN returns NaN:
console.log(NaN + 1); //NaN
console.log(3 * NaN); //NaN
console.log("not a number" / 2 - 1); //NaN

//There is only one exception
console.log(NaN ** 0,"Exceptional NaN case") //output as 1

//BigInt
//In Javascript the numbers type cannot safely represent integer
//values larger than(2 to the power of 53 - 1)or less than -(2 to the power 53 - 1) for negatives.
//all Odd intergers greater than 2 to the power of 53 can't be stored at all
// in the "number" type.

//String
//A String in Javascript in must be surrounded by the quotes.
//In Javascript, there are 3 types of quotes.
//Double quotes "Hello"
//Single quotes 'Hello'
//Backticks 'Hello'

//Double and single quotes. There's practically no differnce between them in Javascript.
//Backticks are "extended functionality quotes".They allow us to embed
//variables and expressions into a string by wrapping
//them in ${...}
let backticksname = "John";
//embed a varible
console.log(`Hello, ${name}!`); //Hello John!
//embed an expression
console.log(`the result is ${1 + 2}`);
//the result is 3

//Boolean(logical type)
//The boolean has only two values
//true and false
//The type is commonly used to store yes/no values:
//true means "yes,correct",and false means "no correct".

let nameFieldChecked = true; //yes, name field is checked
let ageFieldChecked = false;//no, age field is not checked

let isGreater = 4 > 1;
console.log(isGreater); //true(the comparison result is "yes")

//Null
//It contains only the null value:
let nullage = null;
//It represents "nothing","empty" or "value unknown".
//nullage says that age is unknown

//Undefined
//The meaning of undefined is "value is not assigned".
//If the variable is declared,but not assigned, the  its value is undefined:

let unage;
console.log(unage,"Undefined value check")

//Technically, it is possible to explicitly assign undefined to a variable
let undage = 100;
undage = undefined;
console.log(undage,"Undefined undage check") //undefined

//Objects and Symbols
//Object type is special
//All other types are called "primitive" because their values
//can contain only a single thing.In contrast, objects are used to store
//collections of data and more complex entities.

//The typeof operator
console.log(typeof undefined) //undefined
console.log(typeof 0) //number
console.log(typeof 10n) //bigint
console.log(typeof true) //boolean
console.log(typeof "foo") //string
console.log(typeof Symbol("id")) //symbol
console.log(typeof Math) //Object (1)
console.log(typeof null) //Object (2)
console.log(typeof alert) //function (3)

// let myname = prompt("What is your name?","");
// alert(myname)
// let datanew = alert("1"/"0")

// console.log(typeof datanew)

// Increment/Decrement
//Increment ++ increases a variable by 1:
let counter = 2;
counter++; //works the same as counter = counter + 1, but is shorter
// alert(counter); //3

//Decerment
let counter1 = 2;
counter1--; //works the same as counter = counter - 1,
// alert(counter1) //1

// Increment and Decrement can only be aplied to variables.
//Trying to use it on a value like 5++ wil gave an error.

let a = 0;
console.log(Boolean(a));
let b = "0";
console.log(Boolean(b));
console.log(a == b,"This is the final value of funny comparison")

//Conditional Branching
// let year = prompt("In which year was ECMAScript-2015 specification published?","")
// if(year == 2015)
// alert("You are right")

//Conditional Operator?
let accessAllowed;
// let conditionage = prompt("How old are you?","");
if(conditionage > 18) {
    accessAllowed = true;
} else {
    accessAllowed = false;
}

console.log(accessAllowed,"conditionage accessAllowed check")

//The operator is represented by ? it is often called ternary
//because the operator has 3 operands. It is actually
//the one and only operator in Javascript which has
//that many operands.

let conditionalmessage;

if(login == "Employee") {
    conditionalmessage = "Hello";
} else if (login == "Director") {
    conditionalmessage = "Greetings"
} else if (login == "") {
    conditionalmessage = "No Login"
} else {
    conditionalmessage = "";
}

let ternarymessage = (login == "Employee") ? "Hello" : 
(login == "Director") ? "Greetings" : 
(login == "") ? "No Login" : "";

// Nullish coalescing operator '??'`
// As it treats null and undefined similarly, we'll
// use a special term here, in this acticle.
//For brevity, we'll say that a value is "defined"
//when it's neither null not undefined.

//The result of a ?? b is:
//- If a is defined, then a,
//- If b is defined, then b.

//In others words, ?? returns the first argument
//if it's not null/undefined. Otherwise, the second one.
//The nullish coalescing operator isn't anything completely new.
//It's just a nice syntax to get the first "defined" value of the two.
//We can rewrite result = a ?? b

//Loops: while and for
//The "while" loop
//while(condition) {
    //code
    //so called "loop body"
// }

//While the condition is truthy, the code from the loop
//body is executed

let i = 0;
while(i<3) {
    alert(i);
    i++;
}

//Object method "this"

let user1 = {
    name1: "Aman",
    age1: 30
} 

user1.sayHi = function() {
    console.log("Hello")
}

user1.sayHi();
