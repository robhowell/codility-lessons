export default function solution(A) {
  if (A.length === 0) return 1;
  if (A.length > 1) {
    A.sort((a, b) => a - b);
  }

  const found = A.find((value, index) => value !== index + 1);

  if (found === undefined) return A.length + 1;

  return found - 1;
}
