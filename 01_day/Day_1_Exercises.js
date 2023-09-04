//1. Write a single line comment which says, comments can make code readable
//comments can make code readable
  
//2. Write another single comment which says, Welcome to 30DaysOfJavaScript
//Welcome to 30 days of JavaScript

//3. Write a multiline comment which says, comments can make code readable, easy to reuse and informative
/*
Comments can make code readable,
easy to reuse and informative
*/

//4. Create a variable.js file and declare variables and assign string, boolean, undefined and null data types
var str = "";
var bool = false;
var undefined;
var _null = null;

//5. Create datatypes.js file and use the JavaScript typeof operator to check different data types. Check the data type of each variable
                               // Output:
console.log(typeof(str))       // string
console.log(typeof(bool))      // boolean
console.log(typeof(undefined)) // undefined
console.log(typeof(_null))     // object

//6. Declare four variables without assigning values
var oneUndefined;
var twoUndefined;
var threeUndefined;
var fourUndefined;

//7. Declare four variables with assigned values
var oneDefined = 1;
var twoDefined = 2;
var threeDefined = 3;
var fourDefined = 4;

//8. Declare variables to store your first name, last name, marital status, country and age in multiple lines
var first_name = "first_name"
var last_name = "last_name"
var martial_status = false;
var country = "Canada";
var age = 19;

//9. Declare variables to store your first name, last name, marital status, country and age in a single line
var fName = "fName", last_name = "lName", martial_status = false, country = "Canada", age = 19;

//10. Declare two variables myAge and yourAge and assign them initial values and log to the browser console.
var myAge = 19;
var yourAge = prompt("Enter your age\n> ");
console.log(`I am ${myAge} years old.\nYou are ${yourAge} years old.`);
/*
Enter your age
> 25
I am 19 years old.
You are 25 years old.
*/
