export const timerForGame = (callback: () => void, timeMs: number) => {
  console.log('Ready?....go!');
  setTimeout(() => {
    console.log("Time's up -- stop!");
    callback();
  }, timeMs);
};
