const tocaptialize = require('./capitalize');

it('check capitalize', () => {
  const string = "mentor";
  const ans = string.charAt(0).toLocaleUpperCase() + string.slice(1);
  expect(tocaptialize("mentor")).toBe(ans);
});
