function solve(input){

let numSeaExcurtion = Number(input[0]);
let numMountainExcurtion = Number(input[1]);
let typePack = input[2];
let index = 2;
let seaSum = 0;
let mountainSum = 0
let profit = 0;

while( typePack !== "Stop"){

    if( typePack == "sea"){
        if( numSeaExcurtion <= 0){
            seaSum += 0;
        }else{
            seaSum += 680;
            numSeaExcurtion -= 1;
        }
    }else if( typePack == "mountain"){
        if( numMountainExcurtion <= 0){
            mountainSum += 0;
        }else{
            mountainSum += 499;
            numMountainExcurtion -= 1;
        }
    }
    profit = seaSum + mountainSum;

    if( numSeaExcurtion == 0 && numMountainExcurtion == 0){
        console.log(`Good job! Everything is sold.`);
        console.log(`Profit: ${profit} leva.`);
        break;
    }
   
    index++;
    typePack = input[index];
    
}

if( typePack == "Stop"){
    console.log(`Profit: ${profit} leva.`);
}

}
solve([ '2', '2', 'sea', 'mountain', 'sea', 'sea', 'mountain' ]);
// solve(['6',        '3',
//     'sea',      'mountain',
//     'mountain', 'mountain',
//     'sea',      'Stop']);