function solve(arg1, arg2){

    let firstN = Number(arg1);
    let secondN = Number(arg2);
    let sum = 0;

    for( let i = firstN; i <= secondN; i++){
        if( i % 9 == 0){
            sum += i;
        }
    }

console.log(`${sum}`);

for( let i = firstN; i <= secondN; i++){
    if( i % 9 == 0){
        console.log(i);
        
    }

}
   

}
solve("100", "200")