function metricConverter(n, unitIn, unitOut) {
    n = Number(n);
    let result = n;

    if (unitIn === "m") {
        if (unitOut === "mm") {
        result = n * 1000;
    } else if (unitOut === "cm") {
        result = n * 100;
    } 
} else if (unitIn === "cm") {
    if (unitOut === "m") {
        result = n / 100;
    } else if (unitOut === "mm") {
        result = n * 10;
    } 
} else if (unitIn === "mm") {
        if (unitOut === "m") {
       result = n / 1000;
    } else if (unitOut === "cm") {
        result = n / 10;
    }
}
    
    console.log(result.toFixed(3));

}

metricConverter("150", "m", "cm");