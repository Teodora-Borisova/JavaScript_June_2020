function solve(arg1, arg2) {
    let startNum = Number(arg1);
    let endNum = Number(arg2);
    let sum = 0;
    let printResult = "";

    for(let i = startNum; i <= endNum; i++){
        if(i % 9 === 0) {
            sum += Number(i);
        }
    }
    console.log(`The sum: ${sum}`);

    for(let i = startNum; i <= endNum; i++){
       if(i % 9 === 0) {
           
        printResult+= i + ' ';
       } 
    }
    console.log(printResult);
    
}

solve("100", "200");