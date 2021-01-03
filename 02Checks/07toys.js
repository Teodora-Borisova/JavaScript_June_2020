function solve(arg1, arg2, arg3, arg4, arg5, arg6) {

    let price = Number(arg1);
    let puzzleCount = Number(arg2);
    let dollCount = Number(arg3);
    let bearCount = Number(arg4);
    let minnionsCount = Number(arg5);
    let truckCount = Number(arg6);

    let money = puzzleCount * 2.60 + dollCount * 3 + bearCount * 4.10 + minnionsCount * 8.20 + truckCount * 2;

    let toys = puzzleCount + dollCount + bearCount + minnionsCount + truckCount;

    if (toys >= 50) {
        money = money * 0.75;
    }

    money = money * 0.9;
    let diff = money - price;

    if (money >= price) {
        console.log(`Yes! ${diff.toFixed(2)} lv left.`);
    } else {
        diff = Math.abs(diff);
        console.log(`Not enough money! ${diff.toFixed(2)} lv needed.`);
    }

}

solve("40.8", "20", "25", "30", "50", "10");