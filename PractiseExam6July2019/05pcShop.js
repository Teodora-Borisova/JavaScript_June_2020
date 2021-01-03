function solve(input){

let numGames = Number(input[0]);
let nameGame = input[1];
let hearthstone = 0;
let fornite = 0;
let overwatch = 0;
let others = 0

for( let i = 1; i < input.length; i++){
    let nameGame = input[i];
    if( nameGame == "Hearthstone"){
        hearthstone++;
    }else if( nameGame == "Fornite"){
        fornite++;
    }else if( nameGame == "Overwatch"){
        overwatch++;
    }else {
        others++;
    }

    

}
console.log(`Hearthstone - ${(hearthstone / numGames * 100).toFixed(2)}%`);
console.log(`Fornite - ${(fornite / numGames * 100).toFixed(2)}%`);
console.log(`Overwatch - ${(overwatch / numGames * 100).toFixed(2)}%`);
console.log(`Others - ${(others / numGames * 100).toFixed(2)}%`);
    
}
//solve([ '4', 'Hearthstone', 'Fornite', 'Overwatch', 'Counter-Strike' ]);
solve([ '3', 'Hearthstone', 'Diablo 2', 'Star Craft 2' ]);