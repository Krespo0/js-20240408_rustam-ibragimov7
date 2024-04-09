/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
  const newArr = [...arr];

  if (param === 'asc') {
    newArr.sort((a, b) => a.localeCompare(b, ["ru", "en"], { caseFirst: 'upper' }));
  } else {
    newArr.sort((b, a) => a.localeCompare(b, ["ru", "en"], { caseFirst: 'upper' }));
  }
  return newArr;
}
