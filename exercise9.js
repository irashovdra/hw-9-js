for (let i = 0; i <= prompt("Будь ласка, введіть число більше ніж 100"); i++) {
  if (i < 100) {
    break;
  } else {
    prompt("Будь ласка, введіть ще раз");
  }
  console.log(i);
}
