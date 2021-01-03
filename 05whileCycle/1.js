function solve(input) {

  index = 0;

  let width = Number(input[0]);
  index++;
  let length = Number(input[1]);
  index++;
  let height = Number(input[2]);
  index++;

  let boxNr = input[index];

  let isFreeSpace = true;
  
  let area = width * height * length;

  index++;

  while ( boxNr != "Done" ){
    let box = Number(boxNr);

    area -= boxNr;
    if ( area < 0 ){
      isFreeSpace = false;
      console.log(`No more free space! You need ${Math.abs(area)} Cubic meters more.`);
      break;
    }
    boxNr = input[index];
    index++;
  }

  if( isFreeSpace ){
    console.log(`${area} Cubic meters left.`);
    
  }
}

solve(["10", 
"10",
"2",
"20",
"20",
"20",
"20",
"122"])






