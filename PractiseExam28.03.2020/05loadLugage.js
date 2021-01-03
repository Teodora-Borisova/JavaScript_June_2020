function solve(input){

let sumVolume = Number(input[0]);
let command = input[1];
let suitcases = 0;
index = 1;
isFreeSpace = true;

while( command !== "End"){
    let currentLugage = Number(command);

    if( (index-1) % 3 == 2){
        currentLugage*= 1.10;
    }

    sumVolume-= currentLugage;

    if( sumVolume < 0){
        isFreeSpace = false;
        console.log(`No more space!`);
        break;
    }

    suitcases++;
    index++;
    command = input[index];
}
    if( isFreeSpace ){
        console.log(`Congratulations! All suitcases are loaded!`);
    }
console.log(`Statistic: ${suitcases} suitcases loaded.`);
}
solve([ '550', '100', '252', '72', 'End' ]);
//solve([ '700.5', '180', '340.6', '126', '220' ]);