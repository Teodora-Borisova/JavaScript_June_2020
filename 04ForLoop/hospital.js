function solve(input){

    let period = Number(input[0]);
    let patienetsPerDay = Number(input[1]);
    let docs = 7;
    let treatedPatients = 0;
    let untreatedPatients = 0;
    let sumTreated = 0;
    let sumUntreated = 0;

    for( let i = 1; i < input.length; i++ ) {
        let currentPatient = Number(input[i]);

        if( i % 3 == 0 && currentPatient > 7){
            docs+= 1;
        }

        if( currentPatient < 7){
            treatedPatients= currentPatient;
            untreatedPatients = 0;
        } else if (currentPatient > 7){
            treatedPatients = docs;
            untreatedPatients = currentPatient - treatedPatients;
        } else if (currentPatient == 7){
            treatedPatients = docs;
            untreatedPatients = 0;
        }
        
        sumTreated += treatedPatients; 
        sumUntreated += untreatedPatients;

    }

    console.log(`Treated patients: ${sumTreated}.`);
    console.log(`Untreated patients: ${sumUntreated}.`);

}
solve([ '4', '7', '27', '9', '1']);