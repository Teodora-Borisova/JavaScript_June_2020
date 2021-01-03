function solve(input){

index = 2;
let kgFood = input[0];
let command = input[1];
sumEatenFood = 0;

while( command !== "Adopted"){
    let eatenFood = Number(command);

    sumEatenFood+= eatenFood;

    command = input[index];
    index++;

}
kgFood = kgFood * 1000;
if( sumEatenFood <= kgFood){
    console.log(`Food is enough! Leftovers: ${kgFood - sumEatenFood} grams.`);    
}else {
    console.log(`Food is not enough. You need ${sumEatenFood - kgFood} grams more.`);
}

}
// solve(['4',   '130',
//     '345', '400',
//     '180', '230',
//     '120', 'Adopted']);

// solve([ '3', '1000', '1000', '1000', 'Adopted' ]);

solve([
    '2',   '999',
    '456', '999',
    '999', '123',
    '456', 'Adopted'
  ]);