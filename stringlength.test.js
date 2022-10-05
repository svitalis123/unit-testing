const stringength = require('./order-total');
it('the string length', ()=>{
  const strin = 'edge';
  const ans = strin.length;

  expect(stringength('edge')).toBe(ans);
});

it('Out of boundexception', () => {
  expect(() => stringength('')).toThrow("out of bound exception");  
});

