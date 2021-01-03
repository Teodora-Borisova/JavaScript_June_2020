function calc(n1, n2, operator) {
    n1 = Number(n1);
    n2 = Number(n2);
    let result = 0;
    let evenOrOdd = "odd"

    if ( operator === "+") {
        result = n1 + n2;   
        if ( result % 2 === 0){
            evenOrOdd = "even"
        }
        console.log(`${n1} ${operator} ${n2} = ${result} - ${evenOrOdd}`); 
        
    } else if ( operator === "-" ) {
        result = n1 - n2;
        if(result % 2 === 0) {
            evenOrOdd = "even"
        }
        console.log(`${n1} ${operator} ${n2} = ${result} - ${evenOrOdd}`); 
    } else if ( operator === "*") {
        result = n1 * n2;
        if( result % 2 === 0) {
            evenOrOdd = "even"
        }
        console.log(`${n1} ${operator} ${n2} = ${result} - ${evenOrOdd}`);
        
    }
    else if ( operator === "/") {
        if ( n2 === 0) {
            console.log(`Cannot divide ${n1} by zero`);
        } else {
            result = n1 / n2;
            console.log(`${n1} / ${n2} = ${result.toFixed(2)}`);
            
        }
        
    } else if ( operator === "%" ) {
        if ( n2 === 0) {
            console.log(`Cannot divide ${n1} by zero`);
        } else {
            result = n1 % n2;
            console.log(`${n1} % ${n2} = ${result}`);
        }
        
    }

}

calc("10",
"12",
"+");