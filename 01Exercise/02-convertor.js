function convertor(radians) {

    radians = Number(radians);
    let degrees = radians * 180 / Math.PI;

    console.log(degrees.toFixed(0));
}

convertor("3.1416");

