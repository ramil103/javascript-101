// Создать функцию, которая удаляет дубликаты из массива
// Например, на входе [1, 2, 2, 3, 2, 3, 4, 5, 4, 1, 4, 5], результат [1, 2, 3, 4, 5]


function deleteDublicates(arr) {
  // Твой код здесь
    let uniqueNums = new Set();
    for(let nums of arr) {
         uniqueNums.add(nums);
    }
    let originalNumsArray = Array.from(uniqueNums)
    return originalNumsArray;
}


// Тесты
console.log(deleteDublicates([]), []);
console.log(deleteDublicates([1, 2, 3]), [1, 2, 3]);
console.log(deleteDublicates([1, 2, 2, 3, 2, 3, 4, 5, 4, 1, 4, 5], [1, 2, 3, 4, 5]));
