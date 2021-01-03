function solve(input){

    let numLoads = Number(input[0]);
    let tonsVehicle = Number(input[1]);
    let avrPriceTon = 0;
    let sumPriceTon = 0;
    let priceTon = 0;
    let sumTons = 0;
    let avrBus = 0;
    let avrTruck = 0;
    let avrTrain = 0;
    let withBus =0;
    let withTruck = 0;
    let withTrain = 0;

    for( let i = 1; i < input.length; i++ ){
        let currentVehicle = Number(input[i]);

        if( currentVehicle >= 4 && currentVehicle <= 11){
            priceTon = 175 * currentVehicle;
            withTruck+= currentVehicle;
        }else if( currentVehicle >= 12){
            priceTon = 120 * currentVehicle;
            withTrain+= currentVehicle;
        }else if( currentVehicle <=3 ) {
            priceTon = 200 * currentVehicle;
            withBus+=currentVehicle;
        }
        sumPriceTon += priceTon;
        sumTons += currentVehicle;
        avrPriceTon = sumPriceTon / sumTons; 
        avrBus = withBus / sumTons * 100;
        avrTruck = withTruck / sumTons * 100;
        avrTrain = withTrain / sumTons * 100; 
    }

console.log(`${avrPriceTon.toFixed(2)}`);
console.log(`${avrBus.toFixed(2)}%`);
console.log(`${avrTruck.toFixed(2)}%`);
console.log(`${avrTrain.toFixed(2)}%`);
}
solve([ '5', '2', '10', '20', '1', '7' ]);