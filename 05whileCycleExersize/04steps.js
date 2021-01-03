function solve(arr){

    const goal = 10000;
    let steps = 0;
    let index = 0;


    while (steps < goal){
        let current = arr[index];
        if( current == `Going home`){
            steps+= Number(arr[index+1]);
            break;
        }
        current = Number(current);
        steps += current;
        index++;
    }
    if ( steps >= goal){
        console.log(`Goal reached! Good job!`);
        console.log(`${steps - goal} steps over the goal!`); 
    } else {
        console.log(`${goal - steps} more steps to reach goal.`);
    }
}
solve(["1500",
"300",
"2500",
"3000",
"Going home",
"200"]);

