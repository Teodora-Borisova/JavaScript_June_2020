function solve(input){
    let index = 0;
    let w = Number(input[index]);
    index++;
    let l = Number(input[index]);
    index++;
    let h = Number(input[index]);
    index++;

    let isFreeSpace = true;

    let cubicMeters = w * l * h;
    let command = input[index];
    index++;

    while( command !== "Done"){
        let box = Number(command);
        cubicMeters -= box;
        if(cubicMeters < 0){
            isFreeSpace = false;
        console.log(`No more free space! You need ${Math.abs(cubicMeters)} Cubic meters more.`);
            break;
        }
        command = input[index];
        index++;  
    } 
    if( isFreeSpace ){
        console.log(`${cubicMeters} Cubic meters left.`);
    } 
    }

solve(["10", 
"10",
"2",
"20",
"20",
"20",
"20",
"122"]);
