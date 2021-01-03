function solve(input){

let numAirCompany = Number(input[0]);
let nameAirCompany = input[1];
let passangers = Number(input[2]);
let index = 2 ;
let totalPassangers = 0;
let count = 0;
let sumPassangers = 0;

while( nameAirCompany !== "Finish" ){

    passangers = Number(passangers);
    
    while( passangers !== "Finish"){
        passangers = Number(passangers);
       count++

        sumPassangers+= passangers;

        index++;
        passangers = input[index];

    }

    let avgSum = sumPassangers/count;

    console.log(`${nameAirCompany}: ${Math.floor(avgSum)} passengers.`);
    
    index++;
    nameAirCompany = input[index];
    passangers = input[index+ 1]

   
    
}
console.log(`${totalPassangers}`);

    
console.log(`${nameAirCompany} has most passengers per flight:
{среният брой пътници на полет}`);

}
solve(['3',           'WizzAir',
    '180',         '230',
    '100',         'Finish',
    'BulgariaAir', '50',
    '60',          '90',
    'Finish',      'Lufthansa',
    '260',         '320',
    'Finish']);

//   solve([
//     '2',      'Qatar Airways',
//     '95',     '231',
//     '323',    'Finish',
//     'LOT',    '76',
//     '89',     '55',
//     'Finish'])