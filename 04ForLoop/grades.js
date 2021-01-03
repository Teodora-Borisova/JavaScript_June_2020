function solve(input){
let studentsNum = Number(input[0]);
let mark = Number(input[1]);
let topStudents = 0;
let avrTopStudents = 0;
let between3 = 0;
let avrBetween3 = 0;
let between4 = 0;
let avrBetween4 = 0;
let fail = 0;
let avrFail = 0
let average = 0;
let sumAverage = 0;

for( let i = 1; i < input.length; i++){
    let currentMark = Number(input[i]);

    if( currentMark >= 5.00){
        topStudents++
        mark++;
        average+= currentMark;
    }else if( currentMark >= 4.00 && currentMark <= 4.99){
        between4++;
        mark++;
        average+= currentMark;
    }else if( currentMark >= 3.00 && currentMark <= 3.99){
        between3++;
        mark++;
        average+= currentMark;
    }else if( currentMark < 3.00){
        fail++;
        mark++;
        average+= currentMark;
    }
    avrTopStudents = topStudents / studentsNum * 100;
    avrBetween4 = between4 / studentsNum * 100;
    avrBetween3 = between3 / studentsNum * 100;
    avrFail = fail / studentsNum * 100;
    sumAverage = average / studentsNum; 
}

console.log(`Top students: ${avrTopStudents.toFixed(2)}%`);
console.log(`Between 4.00 and 4.99: ${avrBetween4.toFixed(2)}%`);
console.log(`Between 3.00 and 3.99: ${avrBetween3.toFixed(2)}%`);
console.log(`Fail: ${avrFail.toFixed(2)}%`);
console.log(`Average: ${sumAverage.toFixed(2)}`);
}

solve([
    '6',   '2', '3',
    '4',   '5', '6',
    '2.2']);