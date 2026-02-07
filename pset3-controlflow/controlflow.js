/*
let numInstruments = prompt("how many instruments do you play?");

let isMultiInstrumentalist = numInstruments > 1;
if ("multiInstrumentalist"){
    print("Wow, you are talented!");
} else {
    print("WOW, I guess you can't be amazing at everything.");
}
*/
/*
let randomTemp = Math.random();
randomTemp = (randomTemp * 20) - 10;
randomTemp = Math.floor(randomTemp);

let isPositive = randomTemp > 0;
let isNegative = randomTemp < 0;

Print(randomTemp);
if(isPositive)
*/


//——————————————————————————————————————————————————————————————
//Looping

//for (slot 1; slot 2; slot3)
//for : keayword
//slot 1: declare a variable/number
//slot 2: declare a boolean 
// slot 3: an expression

/*
for (let i = 0; 1<8; i= i + 1)
 {
    print ("i");
}

*/
/*
let i = 4
print(i)//4

i *=5 // i = i * 5
i += 5 // i = i +1;
i++ // i+=1 // i =i +1;

print(i) // 
*/

let flavors = ["Chocolate",
               "Vanilla",
               "Pineapple",
               "Cookies & Cream",
               "Salted Caramel",]
flavors.push("Banana Split");
flavors.push("Marshmellow");
flavors.push("Mint");

const numIceCreamLeft = 12;


for(let customer = 0; customer < 30; customer += 1){

falvors.push(prompt("Enter a new flavor"));
    print (customer);
    print("Your flavor is: ");
    print(flavors[customer % flacors.length]);

}


