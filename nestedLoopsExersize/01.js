function solve(arg1, arg2){

let catBed = Number(arg1);
let catToilet = Number(arg2);

let catFood = catToilet * 1.25;
let catToys = catFood * 0.50;
let catVet = catToys * 1.10;
let monthSum = catVet + catToys + catFood + catToilet;
let addExprenses = monthSum * 0.05;
let totalMonth = monthSum + addExprenses;
let yearExprenses = catBed + totalMonth * 12;

console.log(`${yearExprenses.toFixed(2)} lv.`);

}
solve(20, 40);