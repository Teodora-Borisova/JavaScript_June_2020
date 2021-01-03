function solve(arr){

    let width = Number(arr[0]);
    let length = Number(arr[1]);
    index = 2;
    cake = width * length;
    onePieceCake = 1;
    let sumPiecesCake = 0;
    let piecesTaken = arr[index];

    while (piecesTaken !== "STOP"){
        
        cake -= Number(piecesTaken);
        sumPiecesCake+= Number(piecesTaken);
        if( cake <= sumPiecesCake ){
            console.log(`No more cake left! You need ${sumPiecesCake - cake} pieces more.`);
            break;
        }
        index++;
        piecesTaken= arr[index];
    }  

    if(  piecesTaken == "STOP"){
        if( cake > sumPiecesCake ){
        console.log(`${cake} pieces are left.`);
        }
    }  
  }

solve(["10",
"10",
"20",
"20",
"20",
"20",
"21"]);













