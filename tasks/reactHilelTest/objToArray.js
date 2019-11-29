// Написать функцию, которые преобразует обьект в массив, который содержит массив ключа и значения,
// не используя Object.entries();

const objToArrayUseKeysMap = (obj) => Object.keys(obj).map((key) => [key, obj[key]]);

// export default { objToArrayUseKeysMap };
