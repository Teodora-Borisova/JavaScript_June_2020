function solve(input) {

    let n = Number(input[0]);
    let smallestNum = Number(input[1]);

    for ( let i = 2; i < input.length; i++ ) {
        let currentNum = Number(input[i]);

        if ( currentNum < smallestNum ) {
            smallestNum = currentNum;
        }
    }
    console.log(smallestNum);
    
}

solve(["3",
"-10",
"20",
"-30"]);

