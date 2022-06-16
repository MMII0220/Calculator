/* Добавить стрелку влево, что есть удалить цифру, сделать эту схему
 **********************************************************/

window.addEventListener('DOMContentLoaded', () => {
  let total = document.querySelector('.input__total'),
    nums = document.querySelectorAll('.num'),
    signs = document.querySelectorAll('.sign'),
    erase = document.querySelector('.erase'),
    res = document.querySelector('.equal');

  let expre;

  /* Для оппределения оператора */
  let hS = false;

  /* Вводим значение */
  nums.forEach((num) => {
    num.addEventListener('click', (event) => {
      const e = event.target.innerHTML;

      total.value += e;

      expre = total.value;

      hS = false;
    });
  });

  /* Выбираем Оператор */
  signs.forEach((sign) => {
    sign.addEventListener('click', (event) => {
      const e = event.target.value;

      if (hS == false) {
        hS = true;

        switch (e) {
          case '+':
            total.value += '+';
            break;
          case '-':
            total.value += '-';
            break;
          case '*':
            total.value += '*';
            break;
          case '/':
            total.value += '/';
            break;
        }
      }
    });
  });

  /* Стираем все данные */
  erase.addEventListener('click', () => {
    total.value = '';

    hS = false;
  });

  /* Оператор Равно */
  res.addEventListener('click', () => {
    if (hS == true) {
      alert('Использован недопустимый формат.');
      return false;
    }
    total.value = eval(expre);

    hS = false;
  });
});
