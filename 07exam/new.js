function solve(arg1, arg2, arg3){

    let numALumin = Number(arg1);
    let typeAlumin = arg2;
    let wayDelivery = arg3;
    let delivery = 60;
    let singlePrice = 0;
    totalSum = 0;
    
    if ( typeAlumin == "90X130" ){
        if( numALumin > 30 && numALumin < 60 ){
            singlePrice = 110 *0.95;
        }else if ( numALumin >= 60 ){
            singlePrice = 110 * 0.92;
        }
    } else if ( typeAlumin == "100X150" ){
        if( numALumin > 40 && numALumin < 80){
            singlePrice = 140 *0.94;
        }else if ( numALumin >= 80 ){
            singlePrice = 140 * 0.90;
        }
    } else if ( typeAlumin == "130X180" ){
        if( numALumin > 20 && numALumin < 50 ){
            singlePrice = 190 *0.93;
        }else if ( numALumin >= 50 ){
            singlePrice = 190 * 0.88;
        }
    } else if ( typeAlumin == "200X300" ){
        if( numALumin > 25 && numALumin < 50){
            singlePrice = 250 *0.91;
        }else if ( numALumin >= 50 ){
            singlePrice = 250 * 0.86;
        }
    }
    
    totalSum = singlePrice * numALumin;
    
    if( wayDelivery == "With delivery" ){
        totalSum += 60;
    }
    
    if ( numALumin < 10 ){
        console.log(`Invalid order`);
    } else if ( numALumin > 99){
        totalSum = (totalSum*0.96);
        
    console.log(`${(totalSum).toFixed(2)} BGN`);
    }
}

    solve("2", "130X180", "With delivery" )
