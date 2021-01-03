function solve(input){

    index = 1;
    let daysGame = Number(input[0]);
    let sumMoney = 0;
    let totalWin = 0;
    let totalLose = 0;

    for( let i = 0; i < daysGame; i++){
        let command = input[index];
        index++;
        let tempMoney= 0;
        let countWin = 0;
        let countLose = 0;

        while( command !== "Finish"){
            let sport = command;
            let score = input[index];
            index++;

            if( score == "win"){
                tempMoney += 20;
                countWin++;
            }else {
                countLose++;
            }
        
            command = input[index];
            index++;
        }

        if( countWin > countLose){
            tempMoney *= 1.10;
            totalWin++
        }else{
            totalLose++;
        }
        sumMoney+= tempMoney;
    }

if( totalWin > totalLose){
    sumMoney*= 1.20;
    console.log(`You won the tournament! Total raised money: ${sumMoney.toFixed(2)}`);
}else{
    console.log(`You lost the tournament! Total raised money: ${sumMoney.toFixed(2)}`);
}

}


solve(['2',         'volleyball',
    'win',       'football',
    'lose',      'basketball',
    'win',       'Finish',
    'golf',      'win',
    'tennis',    'win',
    'badminton', 'win',
    'Finish'])

    // solve(
    //     '3',            'darts',
    //     'lose',         'handball',
    //     'lose',         'judo',
    //     'win',          'Finish',
    //     'snooker',      'lose',
    //     'swimming',     'lose',
    //     'squash',       'lose',
    //     'table tennis', 'win',
    //     'Finish',       'volleyball',
    //     'win',          'basketball',
    //     'win',          'Finish'
    //   ])