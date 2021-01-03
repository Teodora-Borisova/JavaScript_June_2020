function solve(arg1, arg2, arg3){

let fruit = arg1;
let sizeSte = arg2;
let numOrderedSet = Number(arg3);
let price = 0;
let neededSum = 0;
let sum = 0;

if( sizeSte == "big"){
    if( fruit == "Watermelon"){
        price = 5 * 28.70;
    }else if( fruit == "Mango"){
        price = 5 * 19.60;
    } else if( fruit == "Pineapple"){
        price = 5 * 24.80;
    }else if( fruit == "Raspberry"){
        price =5 * 15.20;
    }
}else {
    if( fruit == "Watermelon"){
        price = 2 * 56;
    }else if( fruit == "Mango"){
        price = 2 * 36.66;
    } else if( fruit == "Pineapple"){
        price = 2 * 42.10;
    }else if( fruit == "Raspberry"){
        price = 2 * 20;
    }
}

price = price * numOrderedSet;

if( price >= 400 && price <= 1000 ){
    sum = price* 0.85;
}else if ( price > 1000){
    sum = price * 0.50;
}else {
    sum = price;
}

console.log(`${sum.toFixed(2)} lv.`);


}
solve("Watermelon", "big", 4);