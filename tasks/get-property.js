// Написать функцию, которая получает на вход объект и путь к property,
// а в качестве результата выдает значение property. Путь может быть
// любой глубины. Если по данному пути property не существует, то выдает undefined.
// {a: 1}, 'a' -> 1
// {a: 1}, 'c' -> undefined
// {a: {b: true}}, 'a' -> {b: true}
// {a: {b: true}}, 'a.b' -> true
// {a: {b: {c: 3}}}, 'a.c' -> undefined
// {a: {b: {c: 3}}}, 'a.b.c' -> 3


function getProperty(obj, path) {

}

console.log(getProperty({a: 1}, 'a'), 1);
console.log(getProperty({a: 1}, 'c'), undefined);
console.log(getProperty({a: {b: true}}, 'a'), {b: true});
console.log(getProperty({a: {b: true}}, 'a.b'), true);
console.log(getProperty({a: {b: {c: 3}}}, 'a.c'), undefined);
console.log(getProperty({a: {b: {c: 3}}}, 'a.b.c'), 3);
