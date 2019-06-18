export default class Calculator {

  constructor() {}

  multiply(op1: number, op2: number): number {
    return op1 * op2;
  }

  evaluate(expression: string): number {

    return expression.split('+')
      .map(rawValue => parseInt(rawValue, 10))
      .reduce((result, value) => result + value, 0);
  }
}
