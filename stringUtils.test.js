const reverseString = require ('./stringUtils');
const{reverse}= require("dns");

test("", ()=>{
    expect(reverseString('mat')).toBe('tam');
});