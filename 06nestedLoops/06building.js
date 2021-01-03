function solve(input){

    let floor = Number(input[0]);
    let appartment = Number(input[1]);

    for ( let i = floor; i > 0; i--){
        let result = "";
        for ( j = 0; j < appartment; j++ ){
            if ( floor == i){
                result += `L${i}${j}`;
                
            } else if( i % 2 == 0 ){
                result += `O${i}${j}`;
            }else  {
                result += `A${i}${j}`;
            }
           
        }
        console.log(result);
    }

}
solve(["6", "4"])