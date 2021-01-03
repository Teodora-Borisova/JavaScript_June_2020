function fishing( budget, season, fishermanNr) {

    budget = Number(budget);
    fishermanNr = Number(fishermanNr);
    let result = 0;

    if (season == "Spring") {
        result = 3000;

    } else if ( season == "Summer" || season == "Autumn") {
        result = 4200;

    } else if ( season == "Winter") {
        result = 2600;

    }

    if ( fishermanNr <= 6) {
        result *= 0.9;
    } else if ( fishermanNr >=7 && fishermanNr <=11) {
        result *= 0.85;
    } else {
        result *= 0.75;
    }

    if ( fishermanNr % 2 === 0 && season !== 'Autumn' ) {
        result *= 0.95; 
    }

    let diff = budget - result;
    if ( budget >= result) {
        console.log(`Yes! You have ${diff.toFixed(2)} leva left.`); 
    } else {
        console.log(`Not enough money! You need ${Math.abs(diff).toFixed(2)} leva.`);
    }

    }

fishing(2000,
    "Winter",
    "13");