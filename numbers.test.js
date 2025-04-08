const isEven = require('./numbers')

test('even',()=>{
expect(isEven(6)).toBe(true);
});
test('',()=>{
    expect(isEven(7)).toBe(false);
});