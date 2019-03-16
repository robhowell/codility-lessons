export default function solution(A, K) {
  const arrayToRotate = A;
  const rotateTimes = K;

  if (arrayToRotate.length === 0) return arrayToRotate;

  for (let counter = 0; counter < rotateTimes; counter++) {
    const element = arrayToRotate.pop();
    arrayToRotate.unshift(element);
  }

  return arrayToRotate;
}
