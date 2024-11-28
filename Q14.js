const prompt=require('prompt-sync')();


let userPrice = prompt("Enter the Price: ");
let userDiscount = prompt("Enter the Discount: ");

let price = Number(userPrice);
if (isNaN(price) || price <= 0) {
    console.log("Invalid price. Please enter a valid positive number.");
    return;
}
let discount = !isNaN(Number(userDiscount));

function calculatePrice(price, userDiscount=10 ) {

   console.log(price - price*(userDiscount/100));
   
    
}
calculatePrice(price, userDiscount);


