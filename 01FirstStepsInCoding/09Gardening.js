function solve(input) {

    let squareMeters = Number(input);

    let totalPrice = squareMeters * 7.61;
    let discount = totalPrice * 0.18;
    let totalPricewithDiscount = totalPrice * 0.82;


    console.log(`The final price is: ${totalPricewithDiscount} lv.`);
    console.log(`The discount is: ${discount} lv.`)
    
}

solve("550");