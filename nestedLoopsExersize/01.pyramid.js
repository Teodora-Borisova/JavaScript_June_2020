function pyramid(arr){

    let n = Number(arr[0]);
    let currentNum = 1;
    let isBigger = false;
        
    for ( let row = 1; row <= n; row++ ) {
        let line = '';

        for ( let col = 1; col <= row; col++ ){
            if( currentNum > n){
                isBigger = true;
                break;
            }
            line += currentNum + ' ';
            currentNum++;
        }
        console.log(line);
        
        if( isBigger ) {
            break;
        }
    }
}

pyramid(["12"]);