const random = (num1: number, num2: number) => {
  const floor = Math.min(num1, num2);
  const ceiling = Math.max(num1, num2);
  return Math.floor(Math.random() * (ceiling - floor + 1) + floor);
};

export default random;
