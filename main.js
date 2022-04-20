window.addEventListener('DOMContentLoaded', () => {
  let total = document.querySelector('.input__total'),
    nums = document.querySelectorAll('.num'),
    signs = document.querySelectorAll('.sign'),
    erase = document.querySelector('.erase'),
    res = document.querySelector('.equal');

  let expression;

  /* Вводимые числа */
  nums.forEach((num) => {
    num.addEventListener('click', (event) => {
      const e = event.target;

      total.value += e.innerHTML;

      expression = total.value;
    });
  });

  /* Знаки в калькуляторе +,-,*,/ */
  signs.forEach((sign) => {
    sign.addEventListener('click', (event) => {
      const e = event.target;

      total.value += e.value;
    });
  });

  /* Кнопка C*/
  erase.addEventListener('click', () => {
    total.value = '';
  });

  /* Вычисляем значение */
  res.addEventListener('click', () => {
    console.log(eval(expression));
  });
});

/*
switch (sign) {
      case '+':
        total.value = 
        break;
      case '-':
        break;
      case '*':
        break;
      case '/':
        break;
    }
*/
