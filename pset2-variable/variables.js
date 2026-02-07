/* 
Strings

//making semester exist in the world
let semester = 5;
print (semester);

semester = 6;//we can change semester
print (semester);

//immutable variable ( cant change)
const major = "perfornmance";
print (major);
//major = "composition"; reassign an immutable variable 
*/


/*
let firstname = "anki";
print(firstname);

let nameUppercase = firstname.toUpperCase();
print (nameUppercase);

let nameLowercase = firstname.toLowerCase();
print(nameLowercase);

let nameLength = firstname.length;
print (nameLength);
*/

/*-------------------------------------------------------------------------
//Number
let num1 = 10; // integer or int
let num2 = 20.5; // float

print(num1 + num2); // 30.5
print(num1 - num2); // -10.57
print(num1 * num2); // 205.0
print(num1 / num2); // 
print(num1 ** num2); // power of
print(num1 % num2); // modulus(remainder)
*/

/*----------------------------------------------------------------
//Boolean (yes or no)

let amountDrank = prompt("how much did you drink?");
const myDrinkingLimit = 8;
let areYouDrunk = amountDrank >= myDrinkingLimit;

//     print ("Did Anki See me drunk on the train?"); // string (True or False)
//     print (areYouDrunk) // boolean

//      ternary operator

let messageToPrint = areYouDrunk ? "Go home dumass" : "Keep on partying!";
print (messageToPrint)
*/



//Arrays --- name------------------------------------------------------------

let fruits = ["kiwi", "pear", "banana", "lime"];
//fruit is array of strings
print(fruits);
//my fruit smootie thing
let fruit1 = fruits[1];
print(fruit1);


let meals = []; // uninitialized array. its like a storage box. then i push stuffs into it
meals.push("Curry")
meals.push("Burritos");
meals.push("Steak");
print(meals);

meals.push("Sushi");
print(meals);

meals.pop();//removes last item
meals.pop();//removes last two items
print(meals);

let howManyInMyMeals = meals.length;
print(howManyInMyMeals); //






