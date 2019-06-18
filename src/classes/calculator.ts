export default class Calculator {

  constructor() {}

  multiply(op1: number, op2: number): number {
    return op1 * op2;
  }

  evaluate(expression: string): number {
    throw new Error('Evaluate method not implemented.');
  }
}
