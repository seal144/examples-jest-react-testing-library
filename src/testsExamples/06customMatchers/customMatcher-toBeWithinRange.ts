expect.extend({
  toBeWithinRange(actual: number, floor: number, ceiling: number) {
    const pass = actual >= floor && actual <= ceiling;
    if (pass) {
      return {
        message: () =>
          `expected ${this.utils.printReceived(actual)} not to be within range ${this.utils.printExpected(
            `${floor} - ${ceiling}`
          )}`,
        pass: true,
      };
    } else {
      return {
        message: () =>
          `expected ${this.utils.printReceived(actual)} to be within range ${this.utils.printExpected(
            `${floor} - ${ceiling}`
          )}`,
        pass: false,
      };
    }
  },
});
