function init() {
    var binBtn = document.getElementById('binBtn');
    var txtBtn = document.getElementById('txtBtn');

    //button listeners
    binBtn.onclick = makeBin;
    txtBtn.onclick = makeChar;
} //end init

//set onload property 
window.onload = init;


//convert string to binary
function makeBin() {
    var textArea = document.getElementById('textArea');
    var binaryOut = document.getElementById('binaryOut');
    var newBin = [];

    //get string from textArea
    var str = textArea.value;

    
    //convert string to an array of ascii decimal numbers
    var ascAr = convertString(str);



    //converts strings to ascii into an array
    function convertString(s) {
        var asc = [];

        //convert string into array of characters
        var strAr = s.split('');

        //loop through array and convert to ascii
        for (var i in strAr) {
            asc[i] = strAr[i].charCodeAt();
        }
        return asc;
    }


    //build array with ascii converted to binary
    for (var i in ascAr) {
        newBin[i] = ConvertBase.dec2bin(ascAr[i]);
    }

    // add binary to page
    binaryOut.innerHTML = newBin;
}



// convert binary to characters
function makeChar() {
    var binaryOut = document.getElementById('binaryOut');
    var textOut = document.getElementById('textOut');
    var strAr = [];
    var charAr = [];

    //get binary from page
    var bin = binaryOut.innerHTML;

    //make array from binary 
    var binAr = bin.split(',');

    // make array of characters from binary array
    for (var i in binAr) {
        //array of ascii decimal numbers
        strAr[i] = ConvertBase.bin2dec(binAr[i]);
        //array of charcters from ascii decimals
        charAr[i] = String.fromCharCode(strAr[i]);
    }

    // convert array to string with no array commas
    charAr = charAr.join('');

    // add string to page
    textOut.innerHTML = 'The characters from the binary are: <br>' + charAr;
}