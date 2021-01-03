function solve(input){

    let daysNum = Number(input[0]);
    let foodAmount = Number(input[1]);
    let percentFoodDog = 0;
    let percentFoodCat = 0;
    let foodDog = 0;
    let foodCat = 0;
    let foodTogether = 0;
    biscuits = 0;
    let dayCount = 0;
    let lastDayCat = 0;
    let lastDayDog = 0;

    
    for( i = 2; i < input.length; i+= 2){
        let currentFood = Number(input[i]);
        foodDog += currentFood;

        currentFood= Number(input[i+1]);
    
        foodCat += currentFood;

        foodTogether = foodDog + foodCat;
        
        
    }

    lastDayCat = Number(input[input.length - 1]);
        lastDayDog = Number(input[input.length - 2]);
        
        biscuits = 0.10*(lastDayDog + lastDayCat);
    
    console.log(`Total eaten biscuits: ${biscuits}gr.`);
    console.log(`${(foodTogether / foodAmount * 100).toFixed(2)}% of the food has been eaten.`);
    console.log(`${(foodDog / foodTogether * 100).toFixed(2)}% eaten from the dog.`);
    console.log(`${(foodCat / foodTogether * 100).toFixed(2)}% eaten from the cat.`);
    
}

solve([
    '3',   '1000',
    '300', '20',
    '100', '30',
    '110', '40'
  ])

