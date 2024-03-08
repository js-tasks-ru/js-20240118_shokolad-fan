/**
 * pick - Creates an object composed of the picked object properties:
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to pick
 * @returns {object} - returns the new object
 */

const pick = (obj, ...fields) => {
  let result = [];
  let currentArr = Object.entries(obj);

  for (let i = 0; i < currentArr.length; i++) {
    if (currentArr[i].includes(fields[i])) {
      result.push(currentArr[i]);
    }
  }

  return Object.fromEntries(result);
};
