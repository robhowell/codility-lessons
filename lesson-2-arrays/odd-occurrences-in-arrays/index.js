/* globals BigInt */

export default function solution(A) {
  const found = [];

  for (let index = 0; index < A.length; index++) {
    const num = A[index];

    if (typeof found[num] === 'undefined') {
      found[num] = 1;
    } else {
      found[num]++;
    }
  }

  for (let index = 0; index < found.length; index++) {
    const repeats = found[index];

    if (repeats % 2 === 1) return index;
  }
}

const start = process.hrtime.bigint();
for (let index = 0; index < 10000; index++) {
  solution([9, 3, 9, 3, 9, 7, 9, 7, 4]);
}
const end = process.hrtime.bigint();
const nanoseconds = end - start;
const microseconds = nanoseconds / BigInt(1000);
console.log(`Benchmark took ${microseconds} microseconds`);
