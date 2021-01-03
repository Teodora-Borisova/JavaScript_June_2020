// function solve(arg1, arg2, arg3, arg4){

// let pen = Number(arg1);
// let markers = Number(arg2);
// let sprey = Number(arg3);
// let discount = Number(arg4);
// let sum = 0;
// let neededsum = 0;



// sum = (pen*5.80 + markers*7.20 + sprey*1.20);
// neededsum = sum - (sum * discount/100);

// console.log(neededsum.toFixed(3));

// }
// solve(2, 3, 2.5, 25);


function solve(bit, yu, comission){
    let yuToUsd = 0;
    let yoToBgn = 0;
    sumInBgn = 0;
    let bitToBgn = 0;
    sumInEur = 0;


    bitToBgn = bit * 1168; 
    yuToUsd = yu * 0.15;
    yoToBgn = yuToUsd * 1.76;

    sumInBgn = bitToBgn + yoToBgn;
    sumInEur = sumInBgn / 1.95;
    sumInEur = sumInEur - (sumInEur * comission/100);


console.log(sumInEur.toFixed(2));

}
solve(1, 5, 5);