function solve(arr) {
    let firstNum = Number(arr[0]);
    let lastNum = Number(arr[1]);
    let magicNum = Number(arr[2]);
    counter = 0;
    let isFound = false;

    for ( let x = firstNum; x <= lastNum; x++){
        if(isFound) {
            break;
        }

        for ( let y = firstNum ; y <= lastNum; y++){
            counter++;
            if( x + y == magicNum){
                console.log(`Combination N: ${counter} (${x} + ${y} = ${magicNum})`);
                isFound = true;
                break;
            }
        }
    }

    if(!isFound){
        console.log(`${counter}combinations - neither equals${magicNum}`);
    }
    
}

solve(["88",
"888",
"1000"]);