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

  it('trailing_zeroes', () => {
    expect(solution(328)).toBe(2); // 101001000
  });

  it('medium1', () => {
    expect(solution(51712)).toBe(2); // 110010100000000
  });

  it('medium3', () => {
    expect(solution(66561)).toBe(9); // 10000010000000001
  });

  it('large1', () => {
    expect(solution(6291457)).toBe(20); // 11000000000000000000001
  });

  it('large3', () => {
    expect(solution(805306373)).toBe(25); // 110000000000000000000000000101
  });

  it('large6', () => {
    expect(solution(1610612737)).toBe(28); // 1100000000000000000000000000001
  });
});
