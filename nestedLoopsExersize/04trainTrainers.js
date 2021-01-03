function solve(arr){

    const n = Number(arr[0]);
    let presentation = arr[1];
    let index = 1;
    let totalSum = 0;
    let count = 0;


    while (presentation !== "Finish"){
        count++;
        let sum = 0;

        for ( let i = 1; i <= n; i++  ){
            index++;
            sum += Number(arr[index]);
        }

        let avg = sum / n;
        console.log(`${presentation} - ${avg.toFixed(2)}.`);
        totalSum += avg;

        index++;
        presentation = arr[index]
    }
    let totalAvg = totalSum / count;
    console.log(`Student's final assessment is ${totalAvg.toFixed(2)}.`);
    
}

solve(["2",
"While-Loop",
"6.00",
"5.50",
"For-Loop",
"5.84",
"5.66",
"Finish"])
