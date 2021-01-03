function solve(input){

    let maxNumber = Number.MIN_SAFE_INTEGER;
    let index = 0;
    let command = input[index];
    
    while(command !== "Stop"){
        let num = Number(command);
        
        if (num > maxNumber){
            maxNumber = num;
        }
        command = input[index];
        index++;
    }
    console.log(maxNumber);
    
}
solve(["-10",
"20",
"-30",
"Stop"]);
