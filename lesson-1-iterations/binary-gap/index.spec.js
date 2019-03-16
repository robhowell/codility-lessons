import solution from './index';

describe('binary gap solution', () => {
  it('standard test cases', () => {
    expect(solution(1041)).toBe(5); // 10000010001
    expect(solution(15)).toBe(0); // 1111
    expect(solution(32)).toBe(0); // 100000
  });

  it('custom test cases', () => {
    expect(solution(9)).toBe(2); // 1001
    expect(solution(17)).toBe(3); // 10001
    expect(solution(1007)).toBe(1); // 1111101111
    expect(solution(1023)).toBe(0); // 1111111111
    expect(solution(8737)).toBe(4); // 10001000100001
    expect(solution(4368)).toBe(3); // 1000100010000
  });
});
