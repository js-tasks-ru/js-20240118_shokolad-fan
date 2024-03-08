/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc' || 'desc') {
  let result = [];
  let currentArray = [...arr];
  let settingsLocales = ['ru-RU', 'en-EN'];
  let settingsOptions = {caseFirst: 'upper'};

  if (param === 'asc') {
    result = currentArray.sort((a, b) => a.localeCompare(b, settingsLocales, settingsOptions));
  }

  if (param === 'desc') {
    result = currentArray.sort((a, b) => b.localeCompare(a, settingsLocales, settingsOptions));
  }

  return result;
}
