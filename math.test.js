const {add, subtract, multiply, divide}= require ('./math');

test ('add 2 + 3 to equal 5',()=>{
    expect (add (2,3)).toBe(5);
});


test ('add 5 + 9 to equal 13', ()=>{
    expect (add (5,9)). toBe(13);
});

test ('subtract 14 - 5 to equal 9', ()=>{
    expect (subtract (14,5)). toBe (9);
});

test ('multiply 4 * 5 to equal 20', () =>{
    expect (multiply (4,5)). toBe (20);
});

test ('divide 35 / 7 to equal 5', () =>{
    expect (divide (35,7)).toBe (5);
});
