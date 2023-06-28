function findMinSubarrayLength(arr: number[], targetSum: number): number {
  let minLength = Infinity;
  let windowSum = 0;
  let windowStart = 0;

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd];

    while (windowSum >= targetSum) {
      minLength = Math.min(minLength, windowEnd - windowStart + 1);
      windowSum -= arr[windowStart];
      windowStart++;
    }
  }

  return minLength === Infinity ? 0 : minLength;
}

// Ejemplo de uso
const arr = [2, 1, 5, 2, 3, 2];
const targetSum = 7;

const minLength = findMinSubarrayLength(arr, targetSum);
console.log(`Longitud del subarreglo más pequeño con suma mayor o igual a ${targetSum}: ${minLength}`);
