function solve(arg1, arg2, arg3){
let typeDrink = arg1;
let sugar = arg2;
let numDrinks = Number(arg3);
let price = 0;
let sum = 0;

if( typeDrink == "Espresso"){
    if( sugar == "Without"){
        price = numDrinks * 0.90 * 0.65;
    }else if( sugar == "Normal"){
        price = numDrinks * 1;
    }else if( sugar == "Extra"){
        price = numDrinks * 1.20;
    }
    if( numDrinks >=5){
        price*= 0.75;
    }
}if( typeDrink == "Cappuccino"){
    if( sugar == "Without"){
        price = numDrinks * 1 * 0.65;
    }else if( sugar == "Normal"){
        price = numDrinks * 1.20;
    }else if( sugar == "Extra"){
        price = numDrinks * 1.60;
    }
}
    if( typeDrink == "Tea"){
        if( sugar == "Without"){
            price = numDrinks * 0.50 * 0.65;
        }else if( sugar == "Normal"){
            price = numDrinks * 0.60;
        }else if( sugar == "Extra"){
            price = numDrinks * 0.70;
        }
    }

    if( price > 15){
        price*= 0.80;
    }

    console.log(`You bought ${numDrinks} cups of ${typeDrink} for ${price.toFixed(2)} lv.`);
    
}
solve("Cappuccino", "Normal", "13");