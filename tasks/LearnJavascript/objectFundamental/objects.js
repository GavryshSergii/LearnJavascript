// task №
// Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.

function isEmpty(obj) {
  if (Object.keys(obj).length !== 0) {
    return false;
  }
  return true;
}

function multiplyNumeric(object) {
  Object.keys(object)
    .forEach((element) => {
      if (typeof object[element] === 'number') {
        // eslint-disable-next-line no-param-reassign
        object[element] *= 2;
      }
    });
}

//
// export default {
//   isEmpty,
// };
