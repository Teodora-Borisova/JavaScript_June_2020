function solve(input){

   let width = Number(input[0]);
   let height = Number(input[1]);
   let sumTaken = 0;
   let piece = 1;
   let cake = width * height;
   index = 2;
   let piecesTaken = input[index];

   while( cake > sumTaken){
    
    cake-= Number(piecesTaken);
    sumTaken+= Number(piecesTaken);

    if(  piecesTaken == "STOP"){
        console.log(`${cake - sumTaken} pieces are left.`);
        break;
    }
    index++;
    piecesTaken = input[index];
    
    }
        if(cake < sumTaken){
            console.log(`No more cake left! You need ${sumTaken - cake} pieces more.`);
        }
   }
  
solve(["10",
"2",
"2",
"4",
"6",
"STOP"]);
