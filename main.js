exports.rgbToHex = function(r, g, b, a = null){
    let i = intToHex(r);
    let j = intToHex(g);
    let k = intToHex(b);
    let l = a !== null? intToHex(Math.round(a*255)): '';
  

    return `#${l.toLowerCase()}${i}${j}${k}`;
}

function intToHex(num){
    return num.toString(16);
}

exports.hexToRgb = function(hex){
    // #FFFFFF

    if(hex[0] === '#'){
        hex = hex.substring(1);
    }

    let alphaPosition = hex.length === 8? 2 : 0;

    let r = hexToInt(hex.substring(0 + alphaPosition, 2 + alphaPosition));
    let g = hexToInt(hex.substring(2 + alphaPosition, 4 + alphaPosition));
    let b = hexToInt(hex.substring(4 + alphaPosition, 6 + alphaPosition));

    let a = hexToInt(hex.substring(0, alphaPosition));

    return `${r},${g},${b}${alphaPosition > 0 ? ',' + (a/255).toFixed(2) : ''}`;
}

function hexToInt(hex){
    return parseInt(hex.toString(), 16);
}