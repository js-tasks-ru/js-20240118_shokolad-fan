/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
  const currentArray = [...arr];
  const settingsLocales = ['ru-RU', 'en-EN'];
  const settingsOptions = {caseFirst: 'upper'};

  if (param === 'desc') {
    currentArray.sort((a, b) => b.localeCompare(a, settingsLocales, settingsOptions));
  } else {
    currentArray.sort((a, b) => a.localeCompare(b, settingsLocales, settingsOptions));
  }

  return currentArray;
}
