function solve(input){

    let index = 0;
    let user = input[index];
    //index++;
    let password = input[index];
    //index++;
    let data = input[index];
    //index++;

    while(password !== data){
        currentPass = input[index];
        index++;
    }
    console.log(`Welcome ${user}!`); 
}
solve(["Nakov",
"1234",
"Pass",
"1324",
"1234"]);

// function solve(input){

//     let userName = input[0];
//     let password = input[1];
//     let currentPass = input[2];
//     let index = 3;
   
//     while( password !== currentPass ){
//        currentPass = input[index];
//        index++;
//     }
//    console.log(`Welcome ${userName}!`);
   
        
//    }
//    solve(["Nakov",
//    "1234",
//    "Pass",
//    "1324",
//    "1234"])
   
   