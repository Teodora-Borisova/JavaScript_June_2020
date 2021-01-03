function charity(days, cooks, cakes, waffles, pancakes) {

    days = Number(days);
    cooks = Number(cooks);
    cakes = Number(cakes);
    waffles = Number(waffles);
    pancakes = Number(pancakes);

    let cakeAmount = cakes * 45 * cooks * days;
    let wafflesAmount = waffles * cooks * days * 5.80;
    let pancakesAmount = pancakes * cooks * days* 3.20;

    let result = cakeAmount + wafflesAmount + pancakesAmount;
    result -= 1/8 * result;
    console.log(result);

}

charity ("23", "8", "14", "30", "16");