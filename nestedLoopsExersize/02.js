function solve(arg1, arg2, arg3, arg4){
    let sleeveSize = Number(arg1);
    let fontSize = Number(arg2);
    let typeCloth = arg3;
    let tie = arg4;
    let price = 0;

   let sizeShirt = (sleeveSize * 2 + fontSize * 2)/100;
   let sizeShirtTie = sizeShirt* 1.10;

    if( typeCloth == "Linen"){
        if( tie == "Yes"){
            price = (15 * sizeShirtTie + 10) + 0.20*(15 * sizeShirtTie + 10);
        }else {
            price = 15* sizeShirtTie + 10;
        } 
    }else if( typeCloth == 'Cotton'){
        if( tie == "Yes"){
            price = (12 * sizeShirtTie + 10) + 0.20*(12 * sizeShirtTie + 10);
        }else {
            price = 12* sizeShirtTie + 10;
        } 
    }else if( typeCloth == "Denim"){
        if( tie == "Yes"){
            price = (20 * sizeShirtTie + 10) + 0.20*(20 * sizeShirtTie + 10);
        }else {
            price = 20* sizeShirtTie + 10;
        } 
    }else if( typeCloth == " Twill"){
        if( tie == "Yes"){
            price = (16 * sizeShirtTie + 10) + 0.20*(16 * sizeShirtTie + 10);
        }else {
            price = 16* sizeShirtTie + 10;
        } 
    }else if( typeCloth == "Flannel"){
        if( tie == "Yes"){
            price = (11 * sizeShirtTie + 10) + 0.20*(11 * sizeShirtTie + 10);
        }else {
            price = 11* sizeShirtTie + 10;
        } 
    }

console.log(`The price of the shirt is: ${price.toFixed(2)}lv.`);


}
solve(25, 30, 'Linen', 'No');