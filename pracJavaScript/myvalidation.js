function Calculate(){
    /*
    txtVal1 => used for first value
    txtVal2 => used for second value
    txtResult => used for the calculated result
    */
   
    var val1 = document.getElementById('txtVal1').value;
    var val2 = document.getElementById('txtVal2').value;

    if(val1 != '' && val2 != ''){ // Checking non-empty fields

        if( isNaN(val1) || isNaN(val2)){ // isNaN => is not a number ?
            alert('Please enter number only');
        } else {
            document.getElementById('txtResult').value =  parseInt(val1) + parseInt(val2);
        }

    } else { // alerting for empty fields
        alert('You cannot leave any field balnk.');
    }

}