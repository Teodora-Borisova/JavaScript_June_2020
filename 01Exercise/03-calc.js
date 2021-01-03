function calc(amount, term, percent) {

    amount = Number(amount);
    term = Number(term);
    percent = Number(percent);

    let interestPerMonth = amount * percent / 100 / 12;

    let result = amount + term * interestPerMonth;
    console.log(result)

}

calc("200", "3", "5.7");

