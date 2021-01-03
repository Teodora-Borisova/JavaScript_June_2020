function solve( product, city, quontity) {

    quontity = Number(quontity);
    let cost = 0;

    switch("city") {
        case "Sofia" : 
            switch ("product") {
                case "coffee" : cost = quontity * 0.50; break;
                case "water" : cost = quontity * 0.80; break;
                case "beer" : cost = quontity * 1.20 ; break;
                case "sweets" : cost = quontity * 1.45 ; break;
                case "peanuts" : cost = quontity * 1.60 ; break;
            }
        break;
        case "Plovdiv" :
            switch ("product") {
                case "coffee" : cost = quontity * 0.50; break;
                case "water" : cost = quontity * 0.80; break;
                case "beer" : cost = quontity * 1.20 ; break;
                case "sweets" : cost = quontity * 1.45 ; break;
                case "peanuts" : cost = quontity * 1.60 ; break;
            }
        break;
        case "Varna" :
            switch ("product") {
                case "coffee" : cost = quontity * 0.50; break;
                case "water" : cost = quontity * 0.80; break;
                case "beer" : cost = quontity * 1.20 ; break;
                case "sweets" : cost = quontity * 1.45 ; break;
                case "peanuts" : cost = quontity * 1.60 ; break;
            }
        break;
    }
    console.log("cost");
}

solve ("peanuts",
"Plovdiv",
"1");