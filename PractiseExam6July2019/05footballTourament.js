function solve(input){

let nameTeam = input[0];
let numMatches = Number(input[1]);
let result = input[2];
let points = 0;
let wins = 0;
let loose = 0;
let even = 0;
let hasPlayed = false;

for( let i = 2; i < input.length; i++){
    
        let result = input[i];
        if( result == "W"){
            points+= 3;
            wins++;
        }else if( result == "D"){
            points++;
            even++;
        }else if( result == "L"){
            loose++
        }
    
    }

    if( numMatches >= 1){
        console.log(`${nameTeam} has won ${points} points during this season.`);
        console.log(`Total stats:`);
        console.log(`## W: ${wins}`);
        console.log(`## D: ${even}`);
        console.log(`## L: ${loose}`);
        console.log(`Win rate: ${(wins / numMatches * 100).toFixed(2)}%`);
    }else{
        console.log(`${nameTeam} hasn't played any games during this season.`);
    }
}
// solve([
//     'Liverpool', '10',
//     'W',         'D',
//     'D',         'W',
//     'L',         'W',
//     'D',         'D',
//     'W',         'W']);

solve([ 'Barcelona', '7', 'W', 'D', 'L', 'L', 'W', 'W', 'D' ]);

//solve(['Chelsea', '0']);