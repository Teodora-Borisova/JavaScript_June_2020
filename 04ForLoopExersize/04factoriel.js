function solve(n) {
    n = Number(n);

    let product = 1;

    for( let i = n; i > 1; i--) {
        product *= i;
    }

    console.log(product);

}

solve("4");