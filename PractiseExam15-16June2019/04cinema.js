function solve(input){
let numSeats = Number(input[0]);
let currentPeople = Number(input[1]);
let sumPeople = 0;
let index = 1;
let currentSum = 0;
let incomeTickets = 0;

while( numSeats > sumPeople ){
    if( currentPeople == "Movie time!"){
        console.log(`There are ${numSeats - sumPeople} seats left in the cinema.`);
        console.log(`Cinema income - ${incomeTickets} lv`);
    }

    currentPeople = Number(input[index]);
    if( currentPeople % 3 == 0){
        currentSum = (currentPeople * 5) - 5;
    }else{
        currentSum = currentPeople * 5;
    }
    sumPeople+= currentPeople;
    incomeTickets+= currentSum;

    index++;
    currentPeople = input[index];

    if ( numSeats <= sumPeople){
        console.log(`The cinema is full`);
        console.log(`Cinema income - ${incomeTickets} lv`);
    }
}

}

//solve(['100', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', 'Movie time!']);
//solve(['60','10','6','3','20','15','Movie time!']);
solve(['50','15','10','10','15','5'])