function solve(input){

let goal = Number(input[0]);
index = 1;
let sumObejects = 0;
isCashpayment = true;
let cashPayment = true;
let cashTotal = 0;
let cardTotal = 0;
let cashNum = 0;
let cardNum = 0;
let obejctPrice = 0;


while( sumObejects < goal ){
    obejctPrice = input[index];
    if( obejctPrice === "End"){
        break;
    }

    obejctPrice = Number(obejctPrice);
    //Cashpayment
    if ( isCashpayment ){ 
        if( obejctPrice > 100){
            console.log(`Error in transaction!`);
        }else {
            console.log(`Product sold!`);
            sumObejects+= obejctPrice;
            cashTotal+= obejctPrice;
            cashNum++;
        }    
    }

    //Cardpayments
    else{
        if( obejctPrice < 10){
            console.log(`Error in transaction!`);
        }else {
            console.log(`Product sold!`);
            sumObejects+= obejctPrice;
            cardTotal+= obejctPrice;
            cardNum++;
        }
        
    }
    
    isCashpayment = !isCashpayment;
    index++;
}
    if( obejctPrice === "End"){
        console.log(`Failed to collect required money for charity.`);
    }else{
        console.log(`Average CS: ${(cashTotal / cashNum).toFixed(2)}`);
        console.log(`Average CC: ${(cardTotal / cardNum).toFixed(2)}`);
    }
    
}
solve([ '600', '86', '150', '98', '227', 'End' ])

   