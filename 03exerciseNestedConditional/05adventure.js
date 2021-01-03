function adventure(budget, season) {

    budget = Number(budget);
    let result = 0;
    let place = "";
    let destination = "";


    if ( budget <= 100 ) {
        destination = "Bulgaria"
        if ( season === "summer" ) {
            result = 0.30 * budget; 
            place = "Camp"
        } else {
            result = 0.70 * budget;
            place = "Hotel"
        }

    } else if ( budget <= 1000) {
        destination = "Balkans"
        if ( season == "summer" ) {
            result = 0.40 * budget;
            place = 'Camp'
          } else {
            destination = "Balkans"
            result = 0.8 * budget;
            place = "Hotel"
        }

    } else {
        destination = "Europe";
        result = 0.9 * budget;
        place = "Hotel"
    }

    console.log(`Somewhere in ${destination}`);
    console.log(`${place} - ${result.toFixed(2)}`);
    
}

adventure("1500", "summer");