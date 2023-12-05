import { complexMathOperation } from '../complexMathOperation';
import { doubleComplexMathOperation } from '../doubleComplexMathOperation';

jest.mock('../complexMathOperation');

//testing doubleComplexMathOperation without invoking complexMathOperation
describe('doubleComplexMathOperation omitting complexMathOperation', () => {
  test('should correctly calculate the result', () => {
    (complexMathOperation as jest.Mock).mockReturnValue(10);

    const result = doubleComplexMathOperation();

    expect(result).toBe(20); // 10 * 2 = 20
  });
});
