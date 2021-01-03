function market(strawberryPrice, banana, orange, berry, strawberry) {

    strawberryPrice = Number(strawberryPrice);
    strawberry = Number(strawberry);
    banana = Number(banana);
    orange = Number(orange);
    berry = Number(berry);

    strawberry = strawberry * strawberryPrice;

    let berryPrice = strawberryPrice / 2;
    berry = berryPrice * berry;

    let orangePrice = berryPrice * 0.6;
    orange = orangePrice * orange;

    let bananaPrice = berryPrice * 0.2;
    banana = banana * bananaPrice;

    result = strawberry + banana + orange + berry;

    console.log(result);
}

market("48", "10", "3.3", "6.5", "1.7");
