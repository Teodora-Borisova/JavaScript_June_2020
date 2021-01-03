function solve(input){
    let nameFilm = input[0];
    let seats = Number(input[1]);
    let command = input[2];
    index = 2;
    let studentTicket = 0;
    let standardTicket = 0;
    let kidsTicket = 0;
    //let sumTickets = 0;
    let totalTickets = 0;
    let totalKids = 0;
    let totalStadart = 0;
    let totalStudent = 0;

    while( nameFilm !== "Finish" ){
        let sumTickets = 0;
    
        while( command !== "End"){
            if( command == "student"){
                studentTicket++;
            }else if( command == "standard"){
                standardTicket++;
            }else if ( command == "kid"){
                kidsTicket++;
            }
            index++;
            command = input[index];
           
        }
        sumTickets = studentTicket + kidsTicket + standardTicket;
        console.log(`${nameFilm} - ${sumTickets / seats * 100}% full.`);
        
        index++;
        nameFilm = input[index];
        seats = Number(input[index+1]);
        
    }
    totalTickets += sumTickets;
    totalKids += kidsTicket;
    totalStadart += standardTicket;
    totalStudent += studentTicket;
    
console.log(`Total tickets: ${totalTickets}`);
console.log(`${totalStudent}% student tickets.`);
console.log(`${totalKids}% kids tickets.`);
console.log(`${totalStadart}% standard tickets.}`);

}
solve(['Taxi',     '10',
    'standard', 'kid',
    'student',  'student',
    'standard', 'standard',
    'End',      'Scary Movie',
    '6',        'student',
    'student',  'student',
    'student',  'student',
    'student',  'Finish']);