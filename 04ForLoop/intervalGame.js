function solve(input){

let totalSteps = Number(input[0]);
let newStep = Number(input[1]);
let result = 0;
let invalid = 0;
let sumPoints = 0;
let currentPoints = 0;
let between0and9 = 0;
let between10and19 = 0;
let between20and29 = 0;
let between30and39 = 0;
let between40and50 = 0;
let betweenNegative50 = 0

for( let i = 1; i < input.length; i++){
    let currentStep = Number(input[i]);

    if( currentStep >= 0 && currentStep <= 9 ){
        currentPoints = 0.20 * currentStep;
        result+= currentPoints;
        between0and9++;
        
    }else if( currentStep >=10 && currentStep <= 19){
        currentPoints = 0.30 * currentStep;
        result+= currentPoints;
        between10and19++;

    }else if( currentStep >= 20 && currentStep <=29){
        currentPoints = 0.40 * currentStep;
        result+= currentPoints;
        between20and29++;

    }else if( currentStep >= 30 && currentStep <= 39){
        currentPoints = 50;
        result+= currentPoints;
        between30and39++;

    }else if( currentStep >= 40 && currentStep <= 50){
        currentPoints = 100;
        result+= currentPoints;
        between40and50++;

    }else if( currentStep < 0 || currentStep > 50){
        invalid++;
        currentPoints/= 2;
        result= currentPoints ;
        betweenNegative50++;
    }
    sumPoints+= currentPoints;

}
console.log(`${result.toFixed(2)}`);
console.log(`From 0 to 9: ${(between0and9 / totalSteps * 100).toFixed(2)}%`);
console.log(`From 10 to 19: ${(between10and19 / totalSteps * 100).toFixed(2)}%`);
console.log(`From 20 to 29: ${(between20and29 / totalSteps * 100).toFixed(2)}%`);
console.log(`From 30 to 39: ${(between30and39 / totalSteps * 100).toFixed(2)}%`);
console.log(`From 40 to 50: ${(between40and50 /totalSteps * 100).toFixed(2)}%`);
console.log(`Invalid numbers: ${(invalid / totalSteps * 100).toFixed(2)}%`);

}
solve([ '3', '12', '-23', '46' ]);