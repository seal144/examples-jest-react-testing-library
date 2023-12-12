import { fetchBtcRate } from '../../api/fetchBtcRate';

//example of testing acync function
describe('fetchBtcRate', () => {
  test('fetch resolves with data', async () => {
    const result = await fetchBtcRate('pln');
    expect(result).toBeDefined();
    expect(result).toHaveProperty('status');
  });
});

const fetchDataMock = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Mock Data');
    }, 1000);
  });
};

const fetchDataMockWithError = () => {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error('Mock Error'));
    }, 1000);
  });
};

describe('fetchDataMock', () => {
  test('fetch resolve', () => {
    return expect(fetchDataMock()).resolves.toBe('Mock Data');
  });

  // when your async function should be rejected in some circumstances you can test it
  test('fetch reject', () => {
    return expect(fetchDataMockWithError()).rejects.toThrow('Mock Error');
  });
});
