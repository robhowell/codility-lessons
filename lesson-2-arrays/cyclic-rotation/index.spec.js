import solution from './index';

describe('cyclic rotation solution', () => {
  it('standard test cases', () => {
    expect(solution([3, 8, 9, 7, 6], 3)).toEqual([9, 7, 6, 3, 8]);
    expect(solution([0, 0, 0], 1)).toEqual([0, 0, 0]);
    expect(solution([1, 2, 3, 4], 4)).toEqual([1, 2, 3, 4]);
  });

  it('custom test cases', () => {
    expect(solution(['a', 'b', 'c', 'd'], 2)).toEqual(['c', 'd', 'a', 'b']);
  });
});
