function solve(arg1, arg2, arg3, arg4){

let priceLugageOver20kg = Number(arg1);
let lugageKg = Number(arg2);
let daysUntilTrip = Number(arg3);
let lugageNumber = Number(arg4);
let taxLugage = 0;

if( lugageKg >= 10 && lugageKg <= 20){
taxLugage = 0.50 * priceLugageOver20kg;
} else if ( lugageKg > 20 ){
    taxLugage = priceLugageOver20kg;
} else if ( lugageKg < 10 ){
    taxLugage = 0.20 * priceLugageOver20kg
}

if ( daysUntilTrip > 30 ){
    taxLugage = taxLugage * 1.10;
} else if( daysUntilTrip >= 7 && daysUntilTrip <= 30){
    taxLugage = taxLugage * 1.15;
} else if ( daysUntilTrip < 7) {
    taxLugage = taxLugage * 1.40;
}
console.log(`The total price of bags is: ${(taxLugage * lugageNumber).toFixed(2)} lv.`);

}


solve("25.50", "5", "36", "6");