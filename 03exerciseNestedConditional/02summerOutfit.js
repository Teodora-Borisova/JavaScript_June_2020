function solve ( arg1, arg2){
let degrees = Number(arg1);
let time = arg2;
let outfit ;
let shoes; 

if( degrees >= 10 && degrees <= 18 ){
    if( time == "Morning"){
        outfit = 'Sweatshirt';
        shoes = "Sneakers";    
    }
    if( time == "Afternoon" || time == "Evening"){
        outfit= "Shirt";
        shoes = "Moccasins"
    }
}

console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);

}
solve("16",
"Morning");