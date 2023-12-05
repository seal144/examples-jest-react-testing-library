import random from '../random';
import './customMatcher-toBeWithinRange';

// Custom Matchers allow you to create your own assertions that are specific to your need, it enhances the readability of the expectations
for (let i = 0; i < 5; i++) {
  describe('random', () => {
    test('is within range', () => expect(random(1, 2)).toBeWithinRange(1, 2));
    test('is NOT within range', () => {
      expect(random(1, 2)).not.toBeWithinRange(2.1, 100);
      expect(random(1, 2)).not.toBeWithinRange(-100, 0.9);
    });
  });
}
