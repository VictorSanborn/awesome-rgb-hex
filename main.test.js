const main = require("./main");

test('Testing RGB to Hex', () => {
    expect(main.rgbToHex(66,135,245)).toBe('#4287f5');
});

test('Testing RGBA to Hex', () => {
    expect(main.rgbToHex(66,135,245,0.49)).toBe('#7d4287f5');
});

test('Testing Hex to RGB', () => {
    expect(main.hexToRgb('#4287f5')).toBe('66,135,245');
    expect(main.hexToRgb('4287f5')).toBe('66,135,245');
});

test('Testing Hex to RGBA', () => {
    expect(main.hexToRgb('#7d4287f5')).toBe('66,135,245', 0.49);
    expect(main.hexToRgb('7d4287f5')).toBe('66,135,245', 0.49);
});
