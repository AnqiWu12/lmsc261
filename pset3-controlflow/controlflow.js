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


/*
let flavors = ["Chocolate", 
                "Vanilla", 
                "Pineapple", 
                "Cookies & Cream", 
                "Salted Caramel"];

flavors.push("Banana Split");
flavors.push("Cherry Garcia");
flavors.push("Marshmallow");

const numIceCreamLeft = 12;

for (let customer = 0; customer < 40; customer += 1){

    if (customer < numIceCreamLeft)
    {
        print("Your flavor is: ");
        print(flavors[customer % flavors.length]);

    } else {
        print("Sorry, were out of ice cream!")
    }
}
*/

/*
let numBlocks = prompt("How many blocks?");

for (let row = 0; row < numBlocks; row++)
{
    let blocks = [];
    for (let col = numBlocks; col > 0; col--)
    {
        if(row < col)
        {
            blocks.push("_");
        } else {
            blocks.push("#");
        }
    }
    print(blocks);
}
    
*/

let minNameLength = true;
let nameInput;
while (minNameLength)
{
    nameInput = prompt ("Please enter your name");
    if (nameInput.length >= 6)
    {
        minNameLength = false;
     
    
    }
}   print ("HAHA")


