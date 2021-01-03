function solve(arr){

    let destination = arr[0];
    let minBudget = Number(arr[1]);
    let savingsCount = 0;
    let hasSheVisited = false;
    index = 0;
       
        while ( savingsCount < minBudget ){
            let savings = Number(arr[2]);
            savingsCount+= savings;
            index++;
            
            if( savingsCount >= minBudget){
                hasSheVisited = true;
                console.log(`Going to ${destination}!`);
            }

            if(destination == "End"){
                break;
            }
       }
    }

solve(["Greece",
"1000",
"200",
"200",
"300",
"100",
"150",
"240",
"Spain",
"1200",
"300",
"500",
"193",
"423",
"End"])
