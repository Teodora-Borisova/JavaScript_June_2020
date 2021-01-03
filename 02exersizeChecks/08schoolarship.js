function scholarship(income, rateSchool, minSalary ) {
    income = Number(income);
    rateSchool = Number(rateSchool);
    minSalary = Number(minSalary);
 
    let socScholar = 0;
    let excelScholar = 0;
 
 if ( income < minSalary ) {
    if ( rateSchool > 4.5 ) {
        socScholar = 0.35 * minSalary;
    } if (socScholar > excelScholar){
        console.log(`You get a Social scholarship ${Math.floor(socScholar)} BGN`);
    
    if ( rateSchool >= 5.5 ) {
        excelScholar = rateSchool * 25;
    } if ( excelScholar >= socScholar ) {
        console.log(`You get a scholarship for excellent results ${Math.floor(excelScholar)} BGN`);
    }
    }
} else if ( income > minSalary ) {
        if ( rateSchool >= 5.5 ) {
            excelScholar = rateSchool * 25;
            if ( excelScholar >= socScholar ) {
                console.log(`You get a scholarship for excellent results ${Math.floor(excelScholar)} BGN`);
            }
        } else {
            console.log("You cannot get a scholarship!");
        }
    }
}
 
scholarship("300.00",
"5.65",
"420.00");