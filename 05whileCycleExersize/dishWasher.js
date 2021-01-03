function solve(input){

    let bottles = Number(input[0]); 
    let bottle = 750;
    let dish = 5;
    let pot = 15;
    let isPot = 0;
    let quontity = bottles * bottle;
    index = 1;
    let numDish = 0;
    let numPot = 0;
    
    while( quontity > 0 ){
        let utencilsNum = input[index];

        if( utencilsNum === "End"){
            break;
        }

        utencilsNum = Number(utencilsNum);

        if( isPot == 0 || isPot == 1){
            quontity -= utencilsNum * dish;
            numDish+= utencilsNum;
        }else {
            quontity-= utencilsNum * pot;
            numPot+= utencilsNum;
        }
        
        isPot = (isPot + 1) % 3;
        index++;

    }

    if( quontity === "End"){
        console.log(`Detergent was enough!`);
        
    }


}
solve([ '2', '53', '65', '55', 'End' ])