var a = prompt('Enter value of a');
var b = prompt('Enter value of b');
var value = (a * a) + (2 * a * b) - (b * b);

console.log(value);

if (value < 0) {
  console.log('negative value');
} else if (value > 0) {
  console.log('positive value');
} else {
  console.log('the value equals 0');
}

