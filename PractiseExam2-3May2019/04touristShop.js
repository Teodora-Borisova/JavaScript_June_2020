function solve(input){
    let budget = input[0];
    let product = input[1];
    let priceProduct = input[2];
    let index = 1;
    let numProducts = 0;
    let equipmentPrice = 0;
    let counter = 0

    while( product !== "Stop"){
        counter++;

        if ( counter % 3 == 0){
            equipmentPrice+= (priceProduct / 2);
        }else {
            equipmentPrice += priceProduct;
        }
    

        if( budget < equipmentPrice){
            console.log(`You don't have enough money!`);
            console.log(`You need ${priceProduct - budget} leva!`);
            break;
        }

        index+=2;
        product = input[index];
        priceProduct = Number(input[index+1]);
    }

console.log(`You bought ${counter} products for ${equipmentPrice} leva.`);
console.log(budget);

}
solve([153.20,'Backpack',25.20,'Shoes',54,'Sunglasses',30, 'Stop']);