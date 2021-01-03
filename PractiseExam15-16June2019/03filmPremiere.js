function solve(arg1, arg2, arg3){

    let film = arg1;
    let typePack = arg2;
    let numTickts = Number(arg3);
    let price = 0;

    if( film == "John Wick"){
        if( typePack == "Drink"){
            price = numTickts * 12;
        }else if( typePack == "Popcorn"){
            price = numTickts * 15;
        }else if( typePack == "Menu"){
            price = numTickts * 19;
        }
    }else if( film == "Star Wars" ){
        if( typePack == "Drink"){
            price = numTickts * 18;
        }else if( typePack == "Popcorn"){
            price = numTickts * 25;
        }else if( typePack == "Menu"){
            price = numTickts * 30;
        }

        if( numTickts >= 4){
            price*= 0.70;
        }
    }else if( film == "Jumanji"){
        if( typePack == "Drink"){
            price = numTickts * 9;
        }else if( typePack == "Popcorn"){
            price = numTickts * 11;
        }else if( typePack == "Menu"){
            price = numTickts * 14;
        }

        if( numTickts == 2){
            price = (numTickts * 9)* 0.85;
        }
    }

console.log(`Your bill is ${price.toFixed(2)} leva.`);

}
solve('John Wick', 'Drink', '6');

