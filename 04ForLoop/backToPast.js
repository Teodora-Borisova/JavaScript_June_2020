function solve(input){

    let inheritedMoney = Number(input[0]);
    let yearMustLive = Number(input[1]);
    let exprensses = 0;
    let age = 18;

    for( let i = 1800; i <= yearMustLive; i++){
        let currentYear = Number(input[i]);

        if( i % 2 == 0 ){
            exprensses += 12000;
        } else {
            exprensses += 12000 + 50 * age;
        }
        age++;
    }

    if( inheritedMoney > exprensses ){
        console.log(`Yes! He will live a carefree life and will have ${(inheritedMoney - exprensses).toFixed(2)} dollars left.`);
    } else {
        console.log(`He will need ${(exprensses - inheritedMoney).toFixed(2)} dollars to survive.`);
    }

}
solve([ "100000.15", "1808" ]);