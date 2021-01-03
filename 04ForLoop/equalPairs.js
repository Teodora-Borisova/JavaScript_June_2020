function solve(input){

let pairs = Number(input[0]);
let num = Number(input[1]);
let sum = 0;
let value = 0;
let diff = 0;

for( let i = 1; i < input.length; i++){
    let currentNum = Number(input[i]);

    sum += currentNum;
}
    if(sum % 2 == 0){
       value = sum / pairs;
       console.log(`Yes, value=${value}`);
      
    }else {
        diff = sum % pairs;
        console.log(`No, maxdiff=${diff}`);
    }

}

solve([ '2', '-1', '0', '0', '-1' ]);