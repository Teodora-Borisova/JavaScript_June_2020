function solve(input){

let numClimbers = Number(input[0]);
let peopleGroup = Number(input[1]);
let allPeople = 0;
let Musala = 0;
let MusalaPer = 0;
let Monblan = 0;
let MonblanPer = 0;
let Kilimandjaro = 0;
let KilimandjaroPer = 0;
let k2 = 0;
let k2Per = 0;
let everest = 0;
let everestPer = 0;


for( i = 1; i < input.length; i++){
    let currentGroup = Number(input[i]);

    allPeople += currentGroup; 

    if( currentGroup <= 5){
        Musala+= currentGroup;
    }else if( currentGroup >=6 && currentGroup <= 12){
        Monblan+= currentGroup;
    }else if( currentGroup >=13 && currentGroup <= 25){
        Kilimandjaro+= currentGroup;
    }else if( currentGroup >=26 && currentGroup <=40){
        k2 += currentGroup;
    }else if( currentGroup >= 41){
        everest+= currentGroup;
    }
MusalaPer = Musala/ allPeople * 100;
MonblanPer = Monblan / allPeople * 100;
KilimandjaroPer = Kilimandjaro / allPeople * 100;
k2Per = k2 / allPeople * 100;
everestPer = everest / allPeople * 100;

}

console.log(`${MusalaPer.toFixed(2)}%`);
console.log(`${MonblanPer.toFixed(2)}%`);
console.log(`${KilimandjaroPer.toFixed(2)}%`);
console.log(`${k2Per.toFixed(2)}%`);
console.log(`${everestPer.toFixed(2)}%`);

}
solve([ '5', '25', '41', '31', '250', '6' ]
)