function solve(fuelLiters, fuelUsed, totalLaps) {
    fuelLiters = Number(fuelLiters);
    fuelUsed = Number(fuelUsed);
    totalLaps = Number(totalLaps);

    for( let lap = 0; lap < totalLaps; lap++ ) {
        fuelLiters = fuelLiters - (fuelUsed - 0.1);

        if (fuelLiters <= 0) {
            console.log(`You are out of fuel in round ${lap}!`);
            break;
        }
    }

    if ( fuelLiters > 0 ) {
        console.log(`Congrats! You won the race!`);
    }

}
solve("50", "4.3", "30");