function solve(input){
let firstNum = Number(input[0]);
let lastNum = Number(input[1]);
let printLine = '';

for( let i = firstNum; i <= lastNum; i++){
    let isOdd = true;

    for( let j = 0; j < 4; j++){
        let str = String(i);
        let digit = Number(str.charAt(j));

        if( digit % 2 == 0){
            isOdd = false;
            break;
        }
    }

    if( isOdd ){
        printLine += i + ' ';
    }
}

console.log(printLine);
}
solve(['3256', '6579']);