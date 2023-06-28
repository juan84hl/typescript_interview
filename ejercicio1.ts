function countUniqueSteps(n: number, steps: number[]): number {
  const memo: number[] = [];
  return countUniqueStepsRecursive(n, steps, memo);
}

function countUniqueStepsRecursive(n: number, steps: number[], memo: number[]): number {
  if (n === 0) {
    return 1; // Se ha alcanzado la cima de la escalera, se cuenta como una forma única.
  }

  if (n < 0) {
    return 0; // Se ha excedido la cantidad de escalones, no se cuenta como una forma única.
  }

  if (memo[n] !== undefined) {
    return memo[n]; // Si el resultado para este número de escalones ya ha sido calculado, se devuelve directamente.
  }

  let total = 0;

  for (let i = 0; i < steps.length; i++) {
    const currentStep = steps[i];
    total += countUniqueStepsRecursive(n - currentStep, steps, memo);
  }

  memo[n] = total; // Se guarda el resultado en el memo para futuras consultas.

  return total;
}

function printUniqueSteps(n: number, steps: number[]): void {
  const uniqueSteps = countUniqueSteps(n, steps);
  console.log(`El número de formas únicas de subir la escalera es: ${uniqueSteps}`);
}

// Ejemplo de uso
const N = 5;
const steps1 = [1, 2]; // Subir 1 o 2 escalones a la vez
const steps2 = [1, 3, 5]; // Subir 1, 3 o 5 escalones a la vez

console.log('Opción 1 - Subir 1 o 2 escalones a la vez:');
printUniqueSteps(N, steps1);

console.log('Opción 2 - Subir 1, 3 o 5 escalones a la vez:');
printUniqueSteps(N, steps2);
