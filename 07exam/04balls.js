function solve(input){

let numBalls = Number(input[0]);
let colours = input[input[1]];
let points = 0;
let redCount = 0;
let orangeCount = 0;
let yellowCount = 0;
let whiteCount = 0;
let blackCount = 0;
let otherCount = 0;

for( let i = 1; i <= numBalls; i++ ){
    let colours = input[i];

    if( colours === "red"){
        points++; 
        redCount++;
    } 
    else if( colours === "orange"){
        points+= 10;
        orangeCount++;
    }
    else if( colours === "yellow"){
        points+= 15; 
        yellowCount++;
    }
    else if( colours === "white"){
        points+= 20;
        whiteCount++;
    }
    else if( colours === "black" ){
        points/= 2;
        blackCount++;
    } else{
        points+= 0;
        otherCount++;
    }
}
    console.log(`Total points: ${points}`);
    console.log(`Points from red balls ${redCount}`);
    console.log(`Points from orange balls ${orangeCount}`);
    console.log(`Points from yellow balls ${yellowCount}`);
    console.log(`Points from white balls ${whiteCount}`);
    console.log(`Other colors picked: ${otherCount}`);
    console.log(`Divides from black balls: ${blackCount}`); 
}

solve(["3", "white", "black", "pink"]);

