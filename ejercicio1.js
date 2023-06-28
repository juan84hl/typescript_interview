function countUniqueSteps(n, steps) {
    var memo = [];
    return countUniqueStepsRecursive(n, steps, memo);
}
function countUniqueStepsRecursive(n, steps, memo) {
    if (n === 0) {
        return 1; // Se ha alcanzado la cima de la escalera, se cuenta como una forma única.
    }
    if (n < 0) {
        return 0; // Se ha excedido la cantidad de escalones, no se cuenta como una forma única.
    }
    if (memo[n] !== undefined) {
        return memo[n]; // Si el resultado para este número de escalones ya ha sido calculado, se devuelve directamente.
    }
    var total = 0;
    for (var i = 0; i < steps.length; i++) {
        var currentStep = steps[i];
        total += countUniqueStepsRecursive(n - currentStep, steps, memo);
    }
    memo[n] = total; // Se guarda el resultado en el memo para futuras consultas.
    return total;
}
function printUniqueSteps(n, steps) {
    var uniqueSteps = countUniqueSteps(n, steps);
    console.log("El n\u00FAmero de formas \u00FAnicas de subir la escalera es: ".concat(uniqueSteps));
}
// Ejemplo de uso
var N = 5;
var steps1 = [1, 2]; // Subir 1 o 2 escalones a la vez
var steps2 = [1, 3, 5]; // Subir 1, 3 o 5 escalones a la vez
console.log('Opción 1 - Subir 1 o 2 escalones a la vez:');
printUniqueSteps(N, steps1);
console.log('Opción 2 - Subir 1, 3 o 5 escalones a la vez:');
printUniqueSteps(N, steps2);
