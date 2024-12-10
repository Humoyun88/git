let i = +prompt('Сколько овцов хотите посчитать');
while (i <= 0) i = +prompt('Ошибка!');
let natija = "";
for (let j = 1; j <= i; j++) {
  natija += `${j} qo'y${j > 1 ? "lar" : ""}... `;
}
alert(natija)
