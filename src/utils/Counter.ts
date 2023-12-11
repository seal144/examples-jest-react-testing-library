class Counter {
  value: number;
  constructor() {
    this.value = 0;
  }
  increment(incrementValue?: number) {
    incrementValue ? (this.value += incrementValue) : (this.value += 1);
  }
  decrement(decrementValue?: number) {
    decrementValue ? (this.value -= decrementValue) : (this.value -= 1);
  }
  getValue() {
    return this.value;
  }
}

export default Counter;
