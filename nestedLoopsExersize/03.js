function solve(arg1, arg2){

    let breed = arg1;
    let gender = arg2;
    let catMonths = 0;

    if (gender == 'm') {
        isValid = true;
        switch (breed) {
          case "British Shorthair": catMonths = 13 *12 / 6; break;
          case "Siamese": catMonths = 15 * 12 /6; break;
          case "Persian": catMonths = 14 * 12 / 6; break;
          case "Ragdoll": catMonths = 16 * 12 / 6; break;
          case "American Shorthair": catMonths = 12 * 12 / 6; break;
          case "Siberian": catMonths = 11 * 12 / 6; break;
          default: isValid = false ; break;
        }
    }

    if (gender == 'f') {
        isValid = true;
        switch (breed) {
          case "British Shorthair": catMonths = 14 *12 / 6; break;
          case "Siamese": catMonths = 16 * 12 /6; break;
          case "Persian": catMonths = 15 * 12 / 6; break;
          case "Ragdoll": catMonths = 17 * 12 / 6; break;
          case "American Shorthair": catMonths = 13 * 12 / 6; break;
          case "Siberian": catMonths = 12 * 12 / 6; break;
          default: isValid = false ; break;
        }
    }
    if (!isValid) {
        console.log(`${breed} is invalid cat!`);
    } else {
        console.log(`${Math.floor(catMonths)} cat months`);
    }
      
}

solve('Tom', 'm');