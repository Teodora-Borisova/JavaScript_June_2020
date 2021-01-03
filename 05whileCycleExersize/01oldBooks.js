function findBook(arr){

    let book = arr[0];
    let currentBook = arr[1];
    let index = 1;
    let isFound = false;
    let count = 0;


    while( currentBook !== `No More Books` ){
        if (currentBook === book) {
            isFound = true;
            console.log(`You checked ${count} books and found it.`);
            break;
        }
        count++;
        index++;
    currentBook = arr[index];
    }

    if ( isFound !== true ) {
        console.log(`The book you search is not here!`);
        console.log(`You checked ${count} books.`);
    }

}
findBook(["Bourne",
"True Story",
"Forever",
"More Space",
"The Girl",
"Spaceship",
"Strongest",
"Profit",
"Tripple",
"Stella",
"The Matrix",
"Bourne"]);
