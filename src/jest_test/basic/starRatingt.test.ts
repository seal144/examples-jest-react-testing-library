import starRating from './starRating';

describe('starRating', () => {
  test('starRating of 3.74 should be "full full full half empty"', () => {
    expect(starRating(3.74)).toBe('full full full half empty');
  });
  
  test('rating of 2.25 should be "full full half empty empty"', () => {
    expect(starRating(2.25)).toBe('full full half empty empty');
  });
  
  test('rating of -12.34 should be "empty empty empty empty empty"', () => {
    expect(starRating(-12.34)).toBe('empty empty empty empty empty');
  });
  
  test('rating of 1234 should be "full full full full full"', () => {
    expect(starRating(1234.5678)).toBe('full full full full full');
  });
})
