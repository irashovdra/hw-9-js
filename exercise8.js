// 1. Згенерувати оцінки
// 2. Додати всі оцінки
// 3. Поділити на кількість оцінок

let grade;
let gradesQuantity = 5;
let totalGrades = 0;

for (let i = 1; i <= gradesQuantity; i++) {
  grade = Math.round(Math.random() * (12 - 1) + 12);
  totalGrades += grade;
  console.log(grade);
}
totalGrades = totalGrades / gradesQuantity;
console.log(totalGrades);

// 7 + 12 + 6 = 25
// 25 / 3
