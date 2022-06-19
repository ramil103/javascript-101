// Создать функцию, которая проверяет является ли строка палиндромом https://ru.wikipedia.org/wiki/Палиндром
// Например, “madam” -> true, “sir” -> false

function isPalindrom(str) {
  // Твой код здесь
    let sentencReversed = str.toLowerCase();
    const sentence = str.toLowerCase();
    sentencReversed = sentencReversed.split('');
    sentencReversed = sentencReversed.reverse()
    sentencReversed = sentencReversed.join('');
    if (str.length < 2) {
        console.log('Please enter word')
    } else if (sentence == sentencReversed) {
        console.log(str + ' => True');
     } else if (sentence !== sentencReversed) {
        console.log(str + ' => False');
     } 

}

// Тесты
console.log(isPalindrom(''), true);
console.log(isPalindrom('a'), true);
console.log(isPalindrom('ab'), false);
console.log(isPalindrom('bbb'), true);
console.log(isPalindrom('aba'), true);
console.log(isPalindrom('abba'), true);
console.log(isPalindrom('ababa'), true);
