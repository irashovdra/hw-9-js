let notEvenNumbers = 1;
let adding;

for (let i = 3; i <= 9; i++) {
  if (i % 2 !== 0) {
    notEvenNumbers = notEvenNumbers * i;
  }
}
console.log(notEvenNumbers);

// 3 * 5 * 7 * 9
// 3 * 5 = 15
// 15 * 7 = 105
// 105 * 9 = 945
