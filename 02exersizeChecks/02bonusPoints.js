function pointsBonus(points) {

    points = Number(points);
    let bonusPoints = 0;
    bonusPoints = Number(bonusPoints);

    allPoints = points + bonusPoints;

    if( points <= 100 ) {
        bonusPoints = 5;
    } else if ( points < 1000 ) {
        bonusPoints = points * 0.2;
    } else 
        bonusPoints = points * 0.1;
    

    if ( points % 2 == 0) {
        bonusPoints += 1;
    } else if ( points % 10 == 5 ) {
        bonusPoints += 2;
    }

    console.log(bonusPoints);
    console.log(points + bonusPoints);
}

pointsBonus("15875");