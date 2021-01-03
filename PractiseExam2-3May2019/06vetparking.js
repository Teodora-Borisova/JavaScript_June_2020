function solve(input){
let numDays = Number(input[0]);
let numHours = Number(input[1]);
let totalMoney =0;

for(let i = 1; i <= numDays; i++){
let tempMoney = 0;
    for(let h = 1; h <= numHours; h++){
       if(i % 2 == 0 && h % 2 != 0){
        tempMoney+= 2.5;
        }else if( i % 2 != 0 && h % 2 == 0){
           tempMoney+= 1.25;
        }else{
           tempMoney+= 1;
        }

    }

    console.log(`${tempMoney}`);
    totalMoney += tempMoney
}
console.log(`${totalMoney}`);

}
solve([ '2', '5' ]);
