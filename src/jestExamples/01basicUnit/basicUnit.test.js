import starRating from '../../utils/starRating';

//this basic unit test is checking if function returns proper values in different edge cases
describe('starRating', () => {
  test('of 3.74 should be "full full full half empty"', () => {
    expect(starRating(3.74)).toBe('full full full half empty');
  });

  test('of 2.25 should be "full full half empty empty"', () => {
    expect(starRating(2.25)).toBe('full full half empty empty');
  });

  test('of -12.34 should be "empty empty empty empty empty"', () => {
    expect(starRating(-12.34)).toBe('empty empty empty empty empty');
  });

  test('of 1234 should be "full full full full full"', () => {
    expect(starRating(1234.5678)).toBe('full full full full full');
  });
});

// the same tests with test.each syntax
test.each([
  [3.74, 'full full full half empty'],
  [2.25, 'full full half empty empty'],
  [-12.34, 'empty empty empty empty empty'],
  [1234.5678, 'full full full full full'],
])('starRating(%s) should return %s', (number, sterRating) => {
  expect(starRating(number)).toBe(sterRating);
});
