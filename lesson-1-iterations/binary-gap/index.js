const findGap = (binaryArray, gaps) => {
  const firstOne = binaryArray.indexOf('1');

  if (firstOne !== -1) {
    const binaryArrayTrimmed = binaryArray.slice(firstOne + 1);

    const secondOne = binaryArrayTrimmed.indexOf('1');

    if (secondOne > 0) {
      gaps.push(secondOne);
    }

    return findGap(binaryArrayTrimmed.slice(secondOne + 1), gaps);
  }

  if (gaps.length) return Math.max(...gaps);

  return 0;
};

export default function solution(N) {
  if (N !== parseInt(N, 10)) return 0; // Early return if not a base-10 int
  if (N < 1 || N > 2147483647) return 0; // Early return if not in range

  const binaryArray = N.toString(2).split('');
  const numberOfGaps = findGap(binaryArray, []);

  return numberOfGaps;
}

console.log(solution(17));
