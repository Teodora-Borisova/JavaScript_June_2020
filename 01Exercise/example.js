function convert(radians) {

    radians = Number(radians);
    let deggres = radians * 180 / Math.PI;

    console.log(deggres.toFixed(0));

}

convert("3.1416");