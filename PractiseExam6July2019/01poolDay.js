function solve(arg1, arg2, arg3, arg4){

    let numPeople = Number(arg1);
    let taxEntry = Number(arg2);
    let chairPrice = Number(arg3);
    let umbrellaPrice = Number(arg4);

    let taxEntryAll = numPeople * taxEntry;
    let umbrellaNum = Math.ceil(numPeople / 2);
    let umbrellaTaxAll = umbrellaNum * umbrellaPrice;
    let numPeopleChair = Math.ceil(0.75 * numPeople);
    let sumChair = (numPeopleChair * chairPrice);
    let sum = taxEntryAll + umbrellaTaxAll + sumChair;
    
    console.log(`${sum.toFixed(2)} lv.`);

}
solve('21', '5.50', '4.40', '6.20');