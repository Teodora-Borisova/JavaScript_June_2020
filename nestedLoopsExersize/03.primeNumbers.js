function solve(arr){

    let current = arr[0];;
    let index = 0;
    let primeSum = 0;
    let notPrimeSum = 0;
    

    while( current !== 'stop'){
        let isPrime = true;
        let n = Number(current);

        if( n < 0 ){
            console.log(`Number is negative.`);
            index++;
            current = arr[index];
            continue;
        }
        
        if( n == 1){
            isPrime = false;
        } else if ( n == 2){
            isPrime = true;
        } else {
            for( let i = 2; i < n; i++){

                if ( n % i == 0){
                    isPrime = false;
                    break;
                }
                
            }
        }
        if ( isPrime ){
            primeSum+= n;
        } else {
            notPrimeSum += n;
        }
        index++;
        current = arr[index];

    }

    console.log(`Sum of all prime numbers is: ${primeSum}`);
    console.log(`Sum of all non prime numbers is: ${notPrimeSum}`);
    
    
}
solve(["30",
"83",
"33",
"-1",
"20",
"stop"])

