function solve(input){
let maxNum = Number.MIN_SAFE_INTEGER;
let name = input[0];
let numGoals = Number(input[1]);
let index = 0;
let isTheBest = false;

while( name !== 'END'){
    let currentGoals = Number(numGoals);

    if(currentGoals > maxNum){
        maxNum = currentGoals;
    }

    if( maxNum >= 3){
        console.log(`${name} is the best player!`);
        console.log(`${name} has scored ${maxNum} goals and made a hat-trick !!!`);
    }
    
    if(maxNum < 3){
        console.log(`${name} has scored ${maxNum} goals.`);
        
    }

    index+= 2;
    name = input[index];
    numGoals = Number(input[index+1]);
    }
    
}

//solve(['Neymar', '2', 'Ronaldo', '1', 'Messi', '3', 'END']);
solve(['Silva', '5', 'Kane', '10']);