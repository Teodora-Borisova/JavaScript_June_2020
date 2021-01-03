function solve(input){

    let daysNum = Number(input[index]);
    let sumMoney = 0;
    index = 0;
    let totalWin = 0;
    let totalLose = 0;
    let moneyWin = 0;
    
    for( let i = 0; i < daysNum; i++){
        let command = input[index];
        index++;
        let tempMoney = 0;
        let numWin = 0;
        let numLose = 0;

        while( command !== "Finish"){
            let typeSport = command;
            let result = input[index];
            index++;

            if( result == "win"){
                moneyWin+= 20;
                numWin++;
            }else{
                numLose++;
            }
    
            command = input[index];
            index++;
        }

        if( numWin > numLose){
            moneyWin*= 1.10;
            totalWin++;
        }else{
            totalLose++
        }
        sumMoney += moneyWin;
        
    }
    
        if( totalWin > totalLose){
            moneyWin*= 1.20;
            console.log(`You won the tournament! Total raised money: ${sumMoney.toFixed(2)}`);
        }else {
            console.log(`You lost the tournament! Total raised money: ${moneyWin.toFixed(2)}`);
        }
}

solve([2,
    volleyball,
    win,
    football,
    lose,
    basketball,
    win,
    Finish,
    golf,
    win,
    tennis,
    win,
    badminton,
    win,
    Finish]);