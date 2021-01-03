function solve(arg1, arg2) {

    let hour = Number(arg1);
    let weekDay = arg2;
    let isOpen = false;

    if( hour <= 18 && hour >= 10 ){
        if( weekDay == "Monday" || weekDay == "Tuesday" || weekDay == "Wednesday" || weekDay =="Thursday" || weekDay == "Friday" || weekDay == "Saturday"){   
            console.log("open");
        }
    }else {
        console.log("closed");
    }
    
    if (weekDay == "Sunday"){
        console.log("closed");
    }

}
solve("11",
"Sunday");