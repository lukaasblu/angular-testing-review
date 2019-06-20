export class Exception {

  constructor(private message: string) {
  }

  toString() {
    return this.message;
  }
}
