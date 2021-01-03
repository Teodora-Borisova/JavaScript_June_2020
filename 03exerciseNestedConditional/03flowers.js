function newHome(flowers, numFlowers, budget) {

    numFlowers = Number(numFlowers);
    budget = Number(budget);
    let result = 0;

    if(flowers === "Roses") {
        result = numFlowers * 5;
        if(numFlowers > 80) {
            result *= 0.90;
        }
    } else if ( flowers === "Dahlias" ) {
        result = numFlowers * 3.80;
        if (numFlowers > 90) {
            result *= 0.85;
        }
    } else if ( flowers === "Tulips" ) {
        result = numFlowers * 2.80;
        if (numFlowers >80) {
            result *= 0.85;
        }
    } else if ( flowers === "Narcissus" ) {
        result = numFlowers * 3;
        if (numFlowers < 120) {
            result *= 1.15
        }
    } else if ( flowers === "Gladiolus" ) {
        result = numFlowers * 2.50;
        if ( numFlowers < 80) {
            result *= 1.20; 
        }
    }

    let diff = budget - result;

    if (budget >= result) {
        console.log(`Hey, you have a great garden with ${numFlowers} ${flowers} and ${diff.toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money, you need ${Math.abs(diff).toFixed(2)} leva more.`);
        
    }

}

newHome("Roses",
"55",
"250");