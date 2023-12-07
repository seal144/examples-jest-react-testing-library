import { timerForGame } from '../timerForGame';

//needed to manage timers
jest.useFakeTimers();

//testing functions that involve timeouts or intervals.
describe('timerGame', () => {
  test('timerGame calls the callback after a given time', () => {
    const callback = jest.fn();
    timerForGame(callback, 2000);

    // expected that callback not been called immediately
    expect(callback).not.toHaveBeenCalled();

    // advance timers by 1s
    jest.advanceTimersByTime(1000);

    // still expected that callback not have been called
    expect(callback).not.toHaveBeenCalled();

    // advance timers to end
    jest.runAllTimers();

    // callback should be called
    expect(callback).toHaveBeenCalled();
    expect(callback).toHaveBeenCalledTimes(1);
  });
});
