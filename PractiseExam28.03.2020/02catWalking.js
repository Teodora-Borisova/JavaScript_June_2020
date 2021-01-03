function solve(minsWalk, numWalksDay, caloriesDay){

    minsWalk = Number(minsWalk);
    numWalksDay = Number(numWalksDay);
    caloriesDay = Number(caloriesDay);
    let burnedCalDay = 0;


    burnedCalDay = numWalksDay * 5 * minsWalk;

if( burnedCalDay >= (caloriesDay*0.50)){
    console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${burnedCalDay}.`);
}else {
     console.log(`No, the walk for your cat is not enough. Burned calories per day: ${burnedCalDay}.`);
    
}

}
solve(40,
    2,
    300);
    