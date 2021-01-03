function solve(arg1, arg2, arg3, arg4){

let budget = Number(arg1);
let numNights = Number(arg2);
let priceNight = Number(arg3);
let addCostsPercent = Number(arg4);

if (numNights > 7){
    priceNight = priceNight - (priceNight * 0.05);
}

let currentPriceNights = numNights * priceNight;
addCostsPercent = budget * addCostsPercent / 100;
let allCosts = (priceNight * numNights) + addCostsPercent;

if( budget >= allCosts ){
    console.log(`Ivanovi will be left with ${(budget - allCosts).toFixed(2)} leva after vacation.`);
}else {
    console.log(`${(allCosts - budget).toFixed(2)} leva needed.`);
    
}


}
solve("500", "7", "66", "15");