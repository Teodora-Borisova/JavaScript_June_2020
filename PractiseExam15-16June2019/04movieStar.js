function solve(input){
let budget = Number(input[0]);
let nameActor= input[1];
let incomeActor = Number(input[2]);
let income = 0;
let neededBudget = 0;
let index= 1;

while( nameActor !== "ACTION"){

    if(nameActor.length > 15){
        income = budget *0.20;
        budget -= income;
        neededBudget+= income;
        index++;
        nameActor = input[index];
        incomeActor = Number(input[index+1]);

    }else if ( nameActor.length <= 15){
        budget-= incomeActor;
        neededBudget+= incomeActor;
        index+=2;
        nameActor = input[index];
        incomeActor = Number(input[index+1]);   
        }

        if( budget <= 0){
            console.log(`We need ${Math.abs(budget.toFixed(2))} leva for our actors.`);
            break;
        }

}

if( budget > 0){
    console.log(`We are left with ${budget} leva.`);
}

}
solve(['90000', 'Christian Bale', '70000.50', 'Leonard DiCaprio', 'Kevin Spacey', '24000.99', 'ACTION']);

solve(['170000','Ben Affleck','40000.50','Zahari Baharav','80000','Tom Hanks','2000.99','ACTION',])