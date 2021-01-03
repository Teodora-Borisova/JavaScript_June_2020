// function solve(arg1, arg2, arg3, arg4, arg5){

//     let airCompany = arg1;
//     let numAdultTicket = Number(arg2);
//     let numChildTicket = Number(arg3);
//     let priceAdult = Number(arg4);
//     let taxService = Number(arg5);

//     let priceChild = (priceAdult * 0.30 + taxService);
//     priceAdult += taxService;
    
//     let sumPriceTickets = (priceAdult * numAdultTicket) + (priceChild * numChildTicket);

//     let profit = 0.20 *  sumPriceTickets;

// console.log(`The profit of your agency from ${airCompany} tickets is ${profit.toFixed(2)} lv.`);

// }
// solve("WizzAir", "15", "5", "120", "40");

function solve(input){
    let index = 0;
let maxNumber = Number.MIN_SAFE_INTEGER;
let namePlayer = input[0];
let command = input[index];


while( namePlayer !== "END" ){
    let numGoals= Number(command);

    if(numGoals > maxNumber){
        maxNumber = numGoals;
    }

    command = input[index];
    index+= 2;

    if( numGoals >= 3){
        console.log(`${namePlayer} has scored ${numGoals} goals and made a hat-trick !!!`);
        
    }
}


    
}
solve(["Silva", "5", "Harry", "10"]);