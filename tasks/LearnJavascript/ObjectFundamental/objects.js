// Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.

function isEmpty(obj) {
  if (Object.keys(obj).length !== 0) {
    return false;
  }
  return true;
}

export default {
  isEmpty,
};
