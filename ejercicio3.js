function findMinSubarrayLength(arr, targetSum) {
    var minLength = Infinity;
    var windowSum = 0;
    var windowStart = 0;
    for (var windowEnd = 0; windowEnd < arr.length; windowEnd++) {
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
var arr = [2, 1, 5, 2, 3, 2];
var targetSum = 7;
var minLength = findMinSubarrayLength(arr, targetSum);
console.log("Longitud del subarreglo m\u00E1s peque\u00F1o con suma mayor o igual a ".concat(targetSum, ": ").concat(minLength));
