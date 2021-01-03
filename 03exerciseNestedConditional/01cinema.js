function cinema(type, rowsNr, columnNr) {

    rowsNr = Number(rowsNr);
    columnNr = Number(columnNr);
    let Premiere = 12.00;
    let Normal = 7.50;
    let Discount = 5.00;
    income = 0;

    if ( type === "Premiere") {
        income = Premiere * rowsNr * columnNr
    } else if ( type === "Normal" ) {
        income = Normal * rowsNr * columnNr
    } else if ( type === "Discount") {
        income = Discount * rowsNr * columnNr
    }
    console.log(`${income.toFixed(2)} leva`);
    
}

cinema ("Discount",
"12",
"30");