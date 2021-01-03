function solve(arg1, arg2, arg3){

    let recordSec = Number(arg1);
    let distanceMeters = Number(arg2);
    let timeSecondsMeter = Number(arg3);
    let delay = 0;


    let timeDistance = distanceMeters * timeSecondsMeter;
    let additionalTime = (Math.floor(distanceMeters / 50)*30);
    let totalTime = timeDistance + additionalTime;

    
    if( recordSec > totalTime){
        console.log(` Yes! The new record is ${totalTime.toFixed(2)} seconds.`);
    }else {
        console.log(`No! He was ${(totalTime - recordSec).toFixed(2)} seconds slower.`);
    }

}
solve(5554.36,
    1340,
    3.23);