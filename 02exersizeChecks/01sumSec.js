function sum(sec1, sec2, sec3) {

    sec1 = Number(sec1);
    sec2 = Number(sec2);
    sec3 = Number(sec3);

    let totalTime = sec1 + sec2 + sec3;
    let min =  Math.floor(totalTime / 60);
    let sec = totalTime % 60;

    if ( sec < 10) {
        console.log(`${min}:0${sec}`); 
    } else {
        console.log(`${min}:${sec}`);
    }

}

sum("22", "7", "34");