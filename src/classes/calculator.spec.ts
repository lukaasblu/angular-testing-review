import Calculator from './calculator';

describe('Calculator', () => {
  let calc: Calculator;

  beforeEach(() => {
    calc = new Calculator();
  });

  it('should evaluate 10 * 13 to 130', () => {
    expect(calc.multiply(10, 13)).toEqual(130);
  });

  xit('should evaluate 2 + 3 + 4 to 9', () => {
    // @TODO implement this.
  });
});
