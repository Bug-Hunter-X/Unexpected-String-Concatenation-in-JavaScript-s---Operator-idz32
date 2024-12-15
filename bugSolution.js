function add(a, b) {
  // Explicit type conversion to numbers
  return Number(a) + Number(b);
}

console.log(add("1", 2)); // Output: 3
console.log(add(1, "2")); // Output: 3
console.log(add("1", "2")); // Output: 3