/*
  Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого
  сотрудника.
  Если объект salaries пустой, то нужно вернуть null.
  Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.
  P.S. Используйте Object.entries и деструктурирование, чтобы перебрать пары ключ/значение.
 */
function topSalary(salaries) {
  let topSalaryName = null;
  let topSalary = 0;

  Object.entries(salaries).forEach((value) => {
    if (value[1] > topSalary) {
      [topSalaryName, topSalary] = value;
    }
  });
  return topSalaryName;
}
