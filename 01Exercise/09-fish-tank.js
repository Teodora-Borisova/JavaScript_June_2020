function fishtank(lenghtSm, widthSm, heightSm, percent) {

    lenghtSm = Number(lenghtSm)
    widthSm = Number(widthSm);
    heightSm = Number(heightSm);

    let fullVolumeLiters = lenghtSm * widthSm * heightSm * 0.001;

    let liters = fullVolumeLiters - fullVolumeLiters * percent / 100;

    console.log(liters);
}

fishtank("85", "75", "47", "17");
fishtank("105", "77", "89", "18.5");