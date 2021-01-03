function movie(arg1) {

let day = arg1;

if (day === "Monday" || day === "Tuesday" || day === "Friday") {
    console.log(12);
} else if (day === "Wednesday" || day === "Thursday") {
    console.log(14);
} else if ( day === "Saturday" || day === "Sunday") {
    console.log(16);
}
}

movie("Monday");