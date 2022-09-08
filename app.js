function oddishOrEvenish(numb) {
    
    // split the number into digits by converting into str
    var allDigits= numb.toString().split("");
    var sum = 0;


    // convert string list items into integers
    for (i=0 ; i<allDigits.length ; i++) {
        allDigits[i]= parseInt(allDigits[i]);
    } 

    //sum the digits up
    for (i=0; i<allDigits.length ; i++) {
        sum = sum + allDigits[i];
    }
    
    if ((sum%2) == 1) {
        console.log("Odd Number")
    } else if ((sum%2) ==0) {
        console.log("Even Number")
    }
}


oddishOrEvenish(4423233);
// Written by Mert Kaan Atan