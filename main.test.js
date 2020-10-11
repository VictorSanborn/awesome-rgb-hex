const main = require("./main");

test('Testing RGB to Hex', () => {
    expect(1 + 2).toBe(3);
});

test('Testing Hex to RGB', () => {
    expect(main.hexToRgb('#4287f5')).toBe('66,135,245');
    expect(main.hexToRgb('4287f5')).toBe('66,135,245');
});
