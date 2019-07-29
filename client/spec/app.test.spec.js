var Add = require("../src/App/app.test")

describe('Add functionality', () => {
  it('calculates x + y = z', () => {
    expect(Add(10, 5)).toEqual(15);
  });
});