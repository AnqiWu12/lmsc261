const myIceCreamPrice = 10;
let paymentRecieved = prompt ("How much money do you have?");
let isPaymentEnough = paymentRecieved >= myIceCreamPrice;
if (isPaymentEnough){
    print ("Thanks! Enjoy the Ice Cream!");
} else {
    print ("Not enough cash!");
}