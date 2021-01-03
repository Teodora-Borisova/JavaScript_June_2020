function solve(arg1, arg2, arg3) {

    let ageLily = Number(arg1);
    let washingMachinePrice = Number(arg2);
    let toyPrice = Number(arg3);

    let sumMoney = 0;
    let toy = 0;
    let money = 10;


    for( let i = 1; i <= ageLily; i++) {
        if( i % 2 === 0) {
            sumMoney += money - 1;
            money += 10;
        } else {
            toy ++;
        }
    }

    sumMoney += toy * toyPrice;
    let diff = sumMoney - washingMachinePrice;

    if ( diff >= 0) {
        console.log(`Yes! ${diff.toFixed(2)}`);
    } else {
        diff = Math.abs(diff);
        console.log(`No! ${diff.toFixed(2)}`);   
    }
  
}

solve("10", "170", "6");