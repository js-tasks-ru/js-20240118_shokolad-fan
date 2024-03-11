/**
 * invertObj - should swap object keys and values
 * @param {object} obj - the initial object
 * @returns {object | undefined} - returns new object or undefined if nothing did't pass
 */
export function invertObj(obj) {
  if (!obj) {
    return undefined;
  }

  const currentArr = Object.entries({...obj});
  const result = [];

  for (const el of currentArr) {
    result.push(el.reverse());
  }

  return Object.fromEntries(result);
}
