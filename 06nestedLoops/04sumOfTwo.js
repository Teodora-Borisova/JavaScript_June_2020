function solve(input){

    let startNum = Number(input[0]);
    let lastNum = Number(input[1]);
    let magicNum = Number(input[2]);
    let isFound = false;
    let counter = 0;

    for( let i = startNum; i <= lastNum; i++ ){
        if(isFound){
            break;
        }
        for( let z= startNum; z <= lastNum; z++ ){
            counter++;
            if( i + z == magicNum){
                console.log(`Combination N:${counter} (${i} + ${z} = ${magicNum})`);
                isFound = true;
                break;
            }  
        }
    }

    if (!isFound){
        console.log(`${counter} combinations - neither equals ${magicNum}`);
    }
}

solve(["88",
"888",
"1000"]);