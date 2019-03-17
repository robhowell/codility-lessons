import solution from './index';

describe('odd occurrences in array solution', () => {
  it('standard test cases', () => {
    expect(solution([9, 3, 9, 3, 9, 7, 9])).toEqual(7);
  });

  it('custom test cases', () => {
    expect(solution([9, 3, 9, 3, 9, 7, 9, 7, 4])).toEqual(4);
    expect(solution([0, 9, 3, 9, 3, 9, 7, 9, 7])).toEqual(0);
  });
});
