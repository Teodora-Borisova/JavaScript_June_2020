function party (price) {

    price = Number(price);

    let cake = 0.20 * price;
    let drinks = cake - (0.45 * cake);
    let animator = 1/3 * price;

    let result = cake + drinks + animator + price;

    console.log(result);
}

party(2250);