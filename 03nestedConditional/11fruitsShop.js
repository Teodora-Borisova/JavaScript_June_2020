function solve(arg, arg1, arg2) {

  let fruit = arg;
  let day = arg1;
  let volume = Number(arg2);
  let price = 0;
  let isValid = false;

  if (day == "Monday" || day == "Tuesday" || day == "Wednesday" || day == "Thursday" || day == "Friday") {
    isValid = true;
    switch (fruit) {
      case "banana": price = volume * 2.50; break;
      case "apple": price = volume * 1.20; break;
      case "orange": price = volume * 0.85; break;
      case "grapefruit": price = volume * 1.45; break;
      case "kiwi": price = volume * 2.70; break;
      case "pineapple": price = volume * 5.50; break;
      case "grapes": price = volume * 3.85; break;
      default: isValid = false; break;
    }
  }

  if (day == "Saturday" || day == "Sunday") {
    isValid = true;
    switch (fruit) {
      case "banana": price = volume * 2.70; break;
      case "apple": price = volume * 1.25; break;
      case "orange": price = volume * 0.90; break;
      case "grapefruit": price = volume * 1.60; break;
      case "kiwi": price = volume * 3; break;
      case "pineapple": price = volume * 5.60; break;
      case "grapes": price = volume * 4.20; break;
      default: isValid = false; break;
    }
  } if (!isValid) {
    console.log("error");
  } else {
    console.log(`${price.toFixed(2)}`);
  }
}
solve("orange",
"Sunday",
"3");