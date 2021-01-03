function solve(arg) {
    let textNumber = arg + "";
    let sum = 0;

    for(let i = 0; i < textNumber.length; i++) {
        let currentNum = Number(textNumber[i]);
        sum += currentNum;
    }
    console.log(`The sum of the digits is:${sum}`);
}

solve("1234")
