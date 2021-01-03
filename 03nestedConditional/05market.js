function solve(arg1, arg2, arg3){

    let product = arg1;
    let town = arg2;
    let quontity = arg3;
    let totalMoney = 0;

    switch(town){
        case "Sofia" :
            switch(product){
                case "coffee" : totalMoney = quontity * 0.5; break;
                case "water" : totalMoney = quontity * 0.8; break;
                case "beer" : totalMoney = quontity * 1.2; break;
                case "sweets" : totalMoney = quontity * 1.45; break;
                case "peanuts" : totalMoney = quontity * 1.60; break;
            }
        break;
        case "Plovdiv" :
            switch(product){
                case "coffee" : totalMoney = quontity * 0.40; break;
                case "water" : totalMoney = quontity * 0.70; break;
                case "beer" : totalMoney = quontity * 1.15; break;
                case "sweets" : totalMoney = quontity * 1.30; break;
                case "peanuts" : totalMoney = quontity * 1.50; break;
            }
        break;
        case "Varna" :
            switch(product){
                case "coffee" : totalMoney = quontity * 0.45; break;
                case "water" : totalMoney = quontity * 0.70; break;
                case "beer" : totalMoney = quontity * 1.10; break;
                case "sweets" : totalMoney = quontity * 1.35; break;
                case "peanuts" : totalMoney = quontity * 1.55; break;
            }
            break;
    }
    console.log(totalMoney);
    
}

solve("coffee", "Varna", "2");