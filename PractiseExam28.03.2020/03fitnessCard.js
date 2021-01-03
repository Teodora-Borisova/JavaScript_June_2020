function solve(arg1, arg2, arg3, arg4){

    let sum = Number(arg1);
    let gender = arg2;
    let age = Number(arg3);
    let typeSport = arg4;
    let neededsum = 0;

    if( gender == "m"){
        if( typeSport == "Gym"){
            neededsum = 42;
        }else if( typeSport == "Boxing"){
            neededsum = 41;
        }else if ( typeSport == "Yoga"){
            neededsum = 45;
        }else if ( typeSport == "Zumba"){
            neededsum = 34;
        }else if( typeSport == "Dances"){
            neededsum = 51;
        }else if ( typeSport == "Pilates"){
            neededsum = 39;
        }
    }else {
        if( typeSport == "Gym"){
            neededsum = 35;
        }else if( typeSport == "Boxing"){
            neededsum = 37;
        }else if ( typeSport == "Yoga"){
            neededsum = 42;
        }else if ( typeSport == "Zumba"){
            neededsum = 31;
        }else if( typeSport == "Dances"){
            neededsum = 53;
        }else if ( typeSport == "Pilates"){
            neededsum = 37;
        } 
    }

    if( age <= 19){
        neededsum*= 0.80;
    }

    if ( sum >= neededsum){
        console.log(`You purchased a 1 month pass for ${typeSport}.`);
    }else {
        console.log(`You don't have enough money! You need $${(neededsum - sum).toFixed(2)} more.`);
        
    }
}
solve(20, "f", 15, "Yoga");