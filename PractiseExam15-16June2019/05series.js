function solve(input){
let budget = Number(input[0]);
let numSeries = Number(input[1]);
let currentSeries = input[2];
let priceCurrentSeries = Number(input[3]);
let sum = 0;

for( let i = 2; i < input.length; i+= 2){
    let currentSeries = input[i];
    let priceCurrentSeries = Number(input[i+1]);

    if( currentSeries == 'Thrones'){
        priceCurrentSeries*= 0.50;
        sum += priceCurrentSeries;
    }else if( currentSeries == 'Lucifer'){
        priceCurrentSeries *= 0.60;
        sum += priceCurrentSeries;
    }else if( currentSeries == 'Protector'){
        priceCurrentSeries*= 0.70;
        sum += priceCurrentSeries;
    }else if( currentSeries == 'TotalDrama'){
        priceCurrentSeries*= 0.80;
        sum += priceCurrentSeries;
    }else if( currentSeries == 'Area'){
        priceCurrentSeries*= 0.90;
        sum += priceCurrentSeries;
    }else{
        sum+= priceCurrentSeries;
    }
}

if( budget>= sum){
    console.log(`You bought all the series and left with ${(budget - sum).toFixed(2)} lv.`);
}else {
    console.log(`You need ${(sum - budget).toFixed(2)} lv. more to buy the series!`);
}

}

solve([ '10', '3', 'Thrones', '5', 'Riverdale', '5', 'Gotham', '2' ]);
// solve(['25',         '6',
//     'Teen Wolf',  '8',
//     'Protector',  '5',
//     'TotalDrama', '5',
//     'Area',       '4',
//     'Thrones',    '5',
//     'Lucifer',    '9']);
//solve([ '25', '2', 'Thrones', '6', 'Lucifer', '5' ]);