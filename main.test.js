const main = require("./main");

test('Testing RGB to Hex', () => {
    expect(main.rgbToHex(66,135,245)).toBe('#4287f5');
});

test('Testing Hex to RGB', () => {
    expect(main.hexToRgb('#4287f5')).toBe('66,135,245');
    expect(main.hexToRgb('4287f5')).toBe('66,135,245');
});
