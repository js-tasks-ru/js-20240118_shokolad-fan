/**
 * uniq - returns array of uniq values:
 * @param {*[]} arr - the array of primitive values
 * @returns {*[]} - the new array with uniq values
 */
export function uniq(arr) {
  if (!arr) {
    return [];
  }

  return [...new Set(arr)];
}

// Второй пример решения через цикл for
// export function uniq(arr) {
//   if (!arr) {
//     return [];
//   }
//
//   const currentArr = [...arr].sort((a, b) => a - b);
//   const result = [];
//
//   for (let i = 0; i < currentArr.length; i++) {
//     if (currentArr[i] !== currentArr[i - 1]) {
//       result.push(currentArr[i]);
//     }
//   }
//
//   return result;
// }
