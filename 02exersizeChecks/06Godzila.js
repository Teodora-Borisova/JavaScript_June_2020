function movie(budget, actorsNum, clothesPricePerActor) {

    budget = Number(budget);
    actorsNum = Number(actorsNum);
    clothesPricePerActor = Number(clothesPricePerActor);
    let clothesPrice = actorsNum * clothesPricePerActor;

    let decor = budget * 0.1;
   
    if ( actorsNum > 150 ) {
        clothesPrice = clothesPrice * 0.9;
    }

    let total = decor + clothesPrice;
    let diff = Math.abs(total - budget)

    if ( total > budget ) {
        console.log("Not enough money!");
        console.log(`Wingard needs ${diff.toFixed(2)} leva more.`);   
    } else {
        console.log("Action!");
        console.log(`Wingard starts filming with ${diff.toFixed(2)} leva left.`);
    }
}

movie("15437.62",
"186",
"57.99"
);