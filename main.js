exports.rgbToHex = function(r, g, b){


}

function intToHex(num){

}

exports.hexToRgb = function(hex){
    // #FFFFFF
    if(hex[0] === '#'){
        hex = hex.substring(0);
    }

    let r = hexToInt(hex.substring(0,2));
    let g = hexToInt(hex.substring(2,4));
    let r = hexToInt(hex.substring(4,6));

    return `${r},${g},${b}`;
}

function hexToInt(hex){
    return parseInt(hex.toString(), 16);
}