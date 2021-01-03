function solve(arg1, arg2, arg3) {

    let type = arg1;
    let result = 0;

    if(type === "square") {
       let sideA = Number(arg2);
       result = sideA * sideA;
    } else if ( type === "rectangle") {
        let sideA = Number(arg2);
        let sideB = Number(arg3);
        result = sideA * sideB;    
    } else if ( type === "circle") {
        let r = Number(arg2);
        result = Math.PI * r * r;
    } else if ( type === "triangle") {
        let sideA = Number(arg2);
        let sideB = Number(arg3);
        result = (sideA * sideB) / 2;
    }

    console.log(result.toFixed(3));
    
}

solve("triangle","4.5","20");