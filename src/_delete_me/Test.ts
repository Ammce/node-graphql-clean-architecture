class Test {
  constructor(private a: number, private b: number) {}

  /**
   * Method that returns the sum @parameters a: number, b:number
   */
  sum(): number {
    return this.b + this.a;
  }
}

export { Test };
