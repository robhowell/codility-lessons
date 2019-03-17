import solution from './index';

describe('perm missing elem solution', () => {
  it('standard test cases', () => {
    expect(solution([2, 3, 1, 5])).toEqual(4);
  });

  it('custom test cases', () => {
    expect(solution([1, 4, 3, 5])).toEqual(2);
    expect(solution([4, 3, 5, 2])).toEqual(1);
    expect(solution([1])).toEqual(2);
  });
});
