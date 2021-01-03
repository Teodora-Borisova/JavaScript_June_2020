function solve(arg) {

let word = arg;
let sum = 0;

for( let i = 0; i < word.length; i++){
    let ch = word.charAt(i);
    switch(ch){
        case "a" : sum +=1; break;
        case "e" : sum +=2; break;
        case "i" : sum +=3; break;
        case "o" : sum +=4; break;
        case "u" : sum +=5; break;
    }
}
console.log(sum);
}

solve("hello");

// for( let i = 0; i < word.length; i++){
//     let ch = word.charAt(i);

//     if( ch == "a"){
//         sum +=1;
//     }if( ch == "e"){
//         sum += 2;
//     }else if( ch == "i"){
//         sum += 3;
//     }else if ( ch == "o"){
//         sum += 4;
//     }else if ( ch == "u"){
//         sum += 5;
//     }
// }
// console.log(sum)
// }
// solve("hello");