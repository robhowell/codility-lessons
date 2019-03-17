export default function solution(A) {
  const found = new Map();

  for (const num of A) {
    const count = found.get(num);

    if (count) {
      found.set(num, count + 1);
    } else {
      found.set(num, 1);
    }
  }

  for (const [num, count] of found) {
    if (count % 2 === 1) return num;
  }
}
