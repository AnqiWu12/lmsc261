/*
//Example Case in the Week2 aclass ppt
let licensePlate = prompt("Please Enter License Plate Name:");
const maxPlateLength = 6;
let plateLength = licensePlate.length;
let isPlateLengthTooLong = plateLength >= maxPlateLength;
let messageToPrint = isPlateLengthTooLong ? "Sorry, License Plate Too Long" : "License Plate Accepted, Nice!"
print (messageToPrint);
//let variableName = boolean ? option 1 : option2 
*/


//example Case in the week2 b class ppt

/*in: many workouts
an array called workouts
random number generation

out: random workout */

let workouts = [];
let firstworkout = prompt("Whats your first workout?");
workouts.push(prompt("Whats your first workout?"));
workouts.push(prompt("Whats your second workout?"));
workouts.push(prompt("Whats your third workout?"));
workouts.push(prompt("Whats your fourth workout?"));
print(workouts);

let randomNumber = Math.random()* 4;
randomNumber = Math.floor (randomNumber);


print(randomNumber);

print("Your workout today is: ");
print(workouts[randomNumber]);
