/**
 * pick - Creates an object composed of the picked object properties:
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to pick
 * @returns {object} - returns the new object
 */

export const pick = (obj, ...fields) => {
  const result = [];
  const currentArr = Object.entries(obj);

  for (const [key, value] of currentArr) {
    if (~fields.indexOf(key)) {
      result.push([key, value]);
    }
  }

  return Object.fromEntries(result);
};


const pickFor = (obj, ...fields) => {
  const result = [];
  const currentArr = Object.entries(obj);

  for (let i = 0; i < currentArr.length; i++) {
    const [key, value] = currentArr[i];
    if (fields.includes(key)) {
      result.push([key, value]);
    }
  }

  return Object.fromEntries(result);
};
