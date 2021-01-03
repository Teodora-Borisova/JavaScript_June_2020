function solve(input){
    let index = 0;
let maxNumber = Number.MIN_SAFE_INTEGER;
let namePlayer = input[0];
let command = input[index];


while( namePlayer !== "END" ){
    let numGoals= Number(command);

    if(numGoals > maxNumber){
        maxNumber = numGoals;
    }

    command = input[index];
    index+= 2;

    if( numGoals >= 3){
        console.log(`${namePlayer} has scored ${numGoals} goals and made a hat-trick !!!`);
        
    }
}


    
}
solve(["Silva", "5", "Harry", "10"]);