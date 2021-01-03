function solve(input){
let nameActor = input[0];
let pointsAcademy = Number(input[1]);
let numJudge = Number(input[2]);
let nameJudge = input[3];
let pointsJudge = Number(input[4]);
let allpoints = 0;
let sum = 0;
index = 3;
total = 0;
let digitsName = 0;

    for( let j = 3; j < input.length; j+=2){
       let currentNameJudge = input[j];
        let currentPointsJudge = Number(input[j+1])
    

        for ( let i = 0; i < currentNameJudge.length; i++){
           let currnerDigit = Number(currentNameJudge[i]);
            
            digitsName++;
        }
        allpoints = digitsName * pointsJudge / 2;
    
        total = pointsAcademy + allpoints;
    }
   
if( sum > 1250.5){
    console.log(`Congratulations, ${nameActor} got a nominee for leading role with ${sum.toFixed(2)}!`); 
}else{
    console.log(`Sorry, ${nameActor} you need ${(1250.5 - sum).toFixed(2)} more!`);
}

}
solve([
    'Zahari Baharov',
    '205',
    '4',
    'Johnny Depp',
    '45',
    'Will Smith',
    '29',
    'Jet Lee',
    '10',
    'Matthew Mcconaughey',
    '39']);

//   solve(['Sandra Bullock', '340',
//     '5',              'Robert De Niro',
//     '50',             'Julia Roberts',
//     '40.5',           'Daniel Day-Lewis',
//     '39.4',           'Nicolas Cage',
//     '29.9',           'Stoyanka Mutafova',
//     '33']);