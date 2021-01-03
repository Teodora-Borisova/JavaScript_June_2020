function solve(input){
index = 1;
let wantedProfit = Number(input[0]);
let coctail = input[1];
let numCoctail = Number(input[2]);
let sum = 0;

while( sum < wantedProfit){

    coctail = input[index];
    if( coctail == "Party!"){
        console.log(`We need ${wantedProfit - sum} leva more.`);
    }
    let coctailPrice = coctail [coctail.length];
    sum = coctail
    
}
console.log(coctailPrice);



}
solve('500', ' Bellini', '6', ' Bamboo', '7', 'Party!');