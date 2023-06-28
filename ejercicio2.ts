function findDistances(s: string, c: string): number[] {
  const distances: number[] = [];
  let prevIndex = -1;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === c) {
      prevIndex = i;
    }

    if (prevIndex === -1) {
      distances.push(-1);
    } else {
      distances.push(i - prevIndex);
    }
  }

  prevIndex = -1;

  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === c) {
      prevIndex = i;
    }

    if (prevIndex !== -1 && (distances[i] === -1 || prevIndex - i < distances[i])) {
      distances[i] = prevIndex - i;
    }
  }

  return distances;
}

// Ejemplo de uso
const s = "abracadabra";
const c = "a";

const distances = findDistances(s, c);
console.log(`Distancias entre "${c}" y los caracteres de "${s}":`);
console.log(distances);
