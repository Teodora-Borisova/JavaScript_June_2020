function solve(input){

    let firstNum = Number(input[0]);
    let lastNum = Number(input[1]);
    let printLine = ' ';

    for( let i = firstNum; i <= lastNum; i++){
        let currentNum = "" + i;
        let evenSum = 0;
        let oddSum = 0;

        for( let j = 0; j <= currentNum.length; j++){
            let currentDigit = Number(currentNum.charAt(j));
            if( j % 2 === 0){
                evenSum+= currentDigit;
            }else {
                oddSum+= currentDigit;
            }
        }
        if( oddSum === evenSum){
            printLine += i + ' ';
        }
    }

    console.log(printLine);
    
}
solve(["100000",
"100050"]);

//solve(["123456",
//"124000"]);
