const fizzBuzz = require ('./fizzBuzz')

test ('',()=>{
    expect(fizzBuzz(15)).toBe('FizzBuzz');
})
test('',()=>{
    expect(fizzBuzz(27)).toBe('Fizz');
})
test('',()=>{
    expect(fizzBuzz(25)).toBe('Buzz');
})

