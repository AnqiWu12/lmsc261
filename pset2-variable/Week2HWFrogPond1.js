/* 
in: number of frogs trying to jump in
const max capacity = 15
out: message if pond is full or not
*/

let numFrogs = prompt("How many frogs are about to jump in?");
const maxFrogCapacity = 15;

let isPondOverCapacity = numFrogs > maxFrogCapacity;

let messageToPrint = isPondOverCapacity ? "It's too crowded!"  : "Come on in!";

print(messageToPrint);

