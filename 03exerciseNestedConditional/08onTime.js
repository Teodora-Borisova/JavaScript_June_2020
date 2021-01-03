function solve(examHour, examMin, arrivalHour, arrivalMin) {

    examHour = Number(examHour);
    examMin = Number( examMin);
    arrivalHour = Number ( arrivalHour);
    arrivalMin = Number (arrivalMin);
    
    let totalExamMinutes = examHour * 60 + examMin;
    let totalArrivalMinutes = arrivalHour * 60 + arrivalMin;
    let diff = totalExamMinutes - totalArrivalMinutes;

    let hours = Math.floor(Math.abs(diff) / 60);
    let minutes = Math.abs(diff) % 60;

    if( diff < 0 ){
        console.log(`Late`);

        if( hours > 0){
            if( minutes < 10){
                minutes = `${0}${minutes}`;
            }
            console.log(`${hours}:${minutes} hours after the start`);
        }else {
            console.log(`${minutes} minutes after the start`);
        }
    } else if( diff <= 30){
        console.log(`On time`);
        if( diff !== 0){
            console.log(`${minutes} minutes before the start`);
        }
    
    } else {
        console.log(`Early`);
        if( hours > 0){
            if( minutes < 10){
                minutes = `${0}${minutes}`;
            }
            console.log(`${hours}:${minutes} hours before the start`);
        }else {
            console.log(`${minutes} minutes before the start`);
        }
    }
    
}
solve("10",
"00",
"10",
"00")



 