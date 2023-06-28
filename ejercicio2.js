function findDistances(s, c) {
    var distances = [];
    var prevIndex = -1;
    for (var i = 0; i < s.length; i++) {
        if (s[i] === c) {
            prevIndex = i;
        }
        if (prevIndex === -1) {
            distances.push(-1);
        }
        else {
            distances.push(i - prevIndex);
        }
    }
    prevIndex = -1;
    for (var i = s.length - 1; i >= 0; i--) {
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
var s = "abracadabra";
var c = "a";
var distances = findDistances(s, c);
console.log("Distancias entre \"".concat(c, "\" y los caracteres de \"").concat(s, "\":"));
console.log(distances);
