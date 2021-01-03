function solve(input){
let maxGoals = Number.MIN_SAFE_INTEGER;
let player = input[0];
let nuGoals = Number(input[1]);
index = 0;

while( nuGoals <= 10){
      let goals = Number(nuGoals);  

      if (goals > maxGoals){
        maxGoals = goals;
      }

      if( nuGoals == "3"){
        console.log(`${player} has scored ${nuGoals} goals and made a hat-trick !!!`);
      } else if( nuGoals > 3 && nuGoals <= 10){
        console.log(`${player} is the best player!`);
      }

    index+= 2;
    player = input[index];
    nuGoals = Number(input[index + 1]);
}

}
solve(["Silva", "5", "Harry", "10"]);