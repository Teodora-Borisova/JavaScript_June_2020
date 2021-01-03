function solve(arg1, arg2){
    let town = arg1;
    let volumeSold = Number(arg2);
    let comission = 0;
    let isValid = false;

    if( town == "Sofia"){

        if(volumeSold >= 0){
            isValid = true;
        }
        if( volumeSold >= 0 && volumeSold <= 500 ){
            comission = volumeSold * 0.05;
        } else if( volumeSold > 500 && volumeSold <= 1000){
            comission = volumeSold * 0.07;
        } else if( volumeSold > 1000 && volumeSold <= 10000){
            comission = volumeSold * 0.08;
        }else if( volumeSold > 10000){
            comission = volumeSold * 0.12;
        } else {
            console.log("error");
        }
    }if( town == "Varna" ){
        if(volumeSold >= 0){
            isValid = true;
        }

        if( volumeSold >= 0 && volumeSold <= 500 ){
            comission = volumeSold * 0.045;
        } else if( volumeSold > 500 && volumeSold <= 1000){
            comission = volumeSold * 0.075;
        } else if( volumeSold > 1000 && volumeSold <= 10000){
            comission = volumeSold * 0.1;
        }else if( volumeSold > 10000){
            comission = volumeSold * 0.13;
        }else {
            console.log("error"); 
        }
    }if( town == "Plovdiv"){
        if(volumeSold >= 0){
            isValid = true;
        }
        if( volumeSold >= 0 && volumeSold <= 500 ){
            comission = volumeSold * 0.055;
        } else if( volumeSold > 500 && volumeSold <= 1000){
            comission = volumeSold * 0.08;
        } else if( volumeSold > 1000 && volumeSold <= 10000){
            comission = volumeSold * 0.12;
        }else if( volumeSold > 10000){
            comission = volumeSold * 0.145;
        }
    }if(!isValid){
        console.log("error");
    } else{
        console.log(`${comission.toFixed(2)}`);
    }  
}

solve("Kaspichan",
"-50");


