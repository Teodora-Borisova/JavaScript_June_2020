function solve(input){

    let profit = Number(input[0]);
    let nameCocktail = input[1];
    let numCockails = Number(input[2]);
    let sum = 0;
    index = 1;
    money = 0;
    let curCocktail = 0;
 
 while( profit > money ){
    if( nameCocktail == "Party!"){
        console.log(`We need ${profit - money} leva more.`);
        break;
    }
 
    for ( let i = 0; i < nameCocktail.length; i++){
        let ch = Number(nameCocktail.charAt(i));
        sum++;
        }
    money = sum * numCockails;

    if( money % 2 != 0){
        money*= 0.75;
    }

    index+= 2;
    nameCocktail = input[index];
    numCockails = Number(input[index+1]);
 
 }
 console.log(money);
 
 }
 
 solve(['500', 'Bellini', '6', 'Bamboo', '7', 'Party!'])