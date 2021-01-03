function time(hours, mins) {

    hours = Number(hours);
    mins = Number(mins);
    mins = mins + 15;
    hours = (hours + Math.floor(mins/60)) % 24;
    mins = mins % 60;
    
    if ( mins < 10 ) {
        console.log(`${hours}:0${mins}`);
    } else {
        console.log(`${hours}:${mins}`);
    }

}

time("11", "08"); //15m