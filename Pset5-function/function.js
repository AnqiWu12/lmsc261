/*
let greeting = "Hello, ";
let nameToPrint = "David";
print(greeting + nameToPrint);

let greeting2 = "Konichiwa, ";
let nameToPrint2 = "Takuma";
print(greeting2 + nameToPrint2);

let greeting3 = "Nihao, ";
let nameToPrint3 = "Anqi";
print(greeting3 + nameToPrint3);
*/

/*
function greetName()
{
    let greeting = "Hello, ";
    let nameToPrint = "Tired Anqi";
    print(greeting + nameToPrint)
}

greetName()
*/

/*
function square(numberToSquare){
    let squareNumber = numberToSquare * numberToSquare;
    return squareNumber;
}
let biggerNumber = square(3);
let evenBiggerNumber = square(biggerNumber);
print(evenBiggerNumber);
*/

let itemsToToss = ["Moldy Towel", 
    "Dead Kitchen Lamp", 
    "Busted Turntable", 
    "Withered Plant", 
    "Crooked Bookcase"];

function isItemToBeTossed(item)
{
    for(let i = 0; i <= itemsToToss.length; i++)
    {
       let match = itemsToToss[i] === item;
       return match;
    }
}
let myItem = prompt("Do i toss this?");
print(isItemToBeTossed(myItem));