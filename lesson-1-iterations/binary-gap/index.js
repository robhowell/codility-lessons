const findMaxGap = (binary, maxGap = 0) => {
  const startOne = binary.indexOf('1');
  if (startOne === -1) return maxGap;

  const currentBinary = binary.slice(startOne + 1);
  const endOne = currentBinary.indexOf('1');

  return findMaxGap(currentBinary.slice(endOne), Math.max(maxGap, endOne));
};

export default function solution(N) {
  const binary = N.toString(2).split('');
  const maxGap = findMaxGap(binary);

  return maxGap;
}
