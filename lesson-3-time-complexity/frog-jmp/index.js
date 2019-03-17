export default function solution(X, Y, D) {
  const totalDistance = Y - X;
  const numberOfJumps = Math.ceil(totalDistance / D);

  return numberOfJumps;
}
