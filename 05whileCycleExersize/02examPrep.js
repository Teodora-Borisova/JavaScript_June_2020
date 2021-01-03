function solve(arr){

    let countPoorGrades = Number(arr[0]);
    let currentProblem = arr[1];
    let poorGrades = 0;
    let currentGrade = Number(arr[2]);
    let index = 1;
    let sum = 0;
    let problemCount = 0;

    while ( currentProblem !== 'Enough' ){
        sum += currentGrade;
        problemCount++;
        if (currentGrade <= 4) {
            poorGrades++;
        }

        if ( poorGrades == countPoorGrades ){
            console.log(`You need a break, ${poorGrades} poor grades.`);
            break;
        }
        index +=2;
        currentProblem = arr[index];
        currentGrade = Number(arr[ index + 1]);
    }

    let avgHGrade = sum / problemCount;
    if (poorGrades != countPoorGrades){
        console.log(`Average score: ${avgHGrade.toFixed(2)}`);
        console.log(`Number of problems: ${problemCount}`);
        console.log(`Last problem: ${arr[index - 2]}`);
    }

}
solve(["3",
"Money",
"6",
"Story",
"4",
"SpringTime",
"5",
"Bus",
"6",
"Enough"]);