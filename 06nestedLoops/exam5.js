function solve(arg1, arg2, arg3, arg4){
    let termContract = arg1;
    let typeContract = arg2;
    let mobileNet = arg3;
    let monthes = Number(arg4);

    let totalMoney= 0;
    let tempMoney =0;

    if( termContract == "one" ){
        switch(typeContract){
            case "Small":
                if(mobileNet == "yes"){
                    tempMoney += 5.50;
                    totalMoney = monthes * tempMoney; 
                }
                break;
            case "Middle":
                tempMoney+= 18.99;
                if(mobileNet == "yes"){
                    tempMoney += 4.35;
                    totalMoney = monthes * tempMoney; 
                }
                totalMoney = monthes* 18.99;
                break;
            case "Large":
                 ;break;
            case "ExtraLarge":
                ;
                 break;
        }
    
    }else {

    }

    if(mobileNet == "yes"){
        if( totalMoney <= 10){
            totalMoney+= 5.50;
        } else if( totalMoney <= 30){
            totalMoney += 4.35;
        } else if ( totalMoney > 30)
    }

}

solve("one",
"Small",
"yes",
10)