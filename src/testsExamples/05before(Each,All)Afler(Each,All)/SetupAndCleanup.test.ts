import Counter from '../Counter';

let counter: Counter | null; // This variable will be shared across all test cases

beforeAll(() => {
  //Setting up counter before all tests
  counter = new Counter();
});

beforeEach(() => {
  if (counter) counter.value = 0;
});

afterEach(() => {
  //Cleaning up after test...
});

afterAll(() => {
  counter = null;
});

describe('Test Counter class', () => {
  test('increment method by 1', () => {
    counter?.increment();
    expect(counter?.getValue()).toBe(1);
  });

  test('increment method by 100', () => {
    counter?.increment(100);
    expect(counter?.getValue()).toBe(100);
  });

  test('decrement method', () => {
    counter?.decrement();
    expect(counter?.getValue()).toBe(-1);
  });

  test('getValue method', () => {
    expect(counter?.getValue()).toBe(0);
  });
});
