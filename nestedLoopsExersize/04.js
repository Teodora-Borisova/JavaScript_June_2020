function solve(arg1, arg2, arg3){

let N = Number(arg1);
let M = Number(arg2);
let S = Number(arg3);
let sum = "";
let printResult = "";
let isCorrect = false;

for( let i = M; i >= N; i--){
    let currentNum = Number(i);

    
    if( i % 2 == 0 && i % 3 == 0){
        isCorrect = true;
        
        if( i == S){
            isCorrect = false;
            break;
        }
        sum += i + " ";
    }

  
}
console.log(sum);

}
solve('1','30','15');