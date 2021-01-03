function solve(input){
index = 3;
let height = Number(input[0]);
let width = Number(input[1]);
let noPaintPercent = Number(input[2]);
liters = Number(input[3]);
let area = Math.ceil(4* height * width);
let paintedArea = 0;
paintedArea = area - ( area * noPaintPercent / 100);

while( paintedArea > liters){
   liters = input[index];
   if( liters == "Tired!"){
    console.log(`${paintedArea} quadratic m left.`);
    break;
   }
    
    liters = Number(input[index]);
    paintedArea-= liters;
    index++;
}

    if( paintedArea < liters){
    console.log(`All walls are painted and you have ${liters - paintedArea} l paint left!`);
    }
}
//solve([ '3', '5', '10', '2', '3', '4', 'Tired!' ]);
solve([ '2', '3', '25', '6', '7', '8' ]);