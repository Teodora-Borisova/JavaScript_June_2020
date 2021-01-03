function solve(input) {
    
    let index = 0;
    let word = input[index];
    index++;
    
    while(true){
        if(word === "Stop"){
            break;
        }
        console.log(word);
        word = input[index];
        index++;
    }
}

solve(["Nakov",
"SoftUni",
"Sofia",
"Bulgaria",
"SomeText",
"Stop",
"AfterStop",
"Europe",
"HelloWorld"]);