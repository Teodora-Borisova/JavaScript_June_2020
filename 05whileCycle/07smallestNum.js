function solve(input){

    let smallestNum = Number.MAX_SAFE_INTEGER;
    index = 0;
    let currentNum = input[index];
    index++;

    while( currentNum !== "Stop"){
        let num = Number(currentNum);
        if( num < smallestNum){
            smallestNum = num;
        }       
        currentNum = input[index];
        index++
    }
    console.log(smallestNum); 
}

solve(["100",
"99",
"80",
"70",
"Stop"])
