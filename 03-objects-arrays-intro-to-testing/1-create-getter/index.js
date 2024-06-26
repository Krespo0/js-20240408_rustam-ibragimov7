/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */
export function createGetter(path) {
  const fields = path.split('.');


  return (obj) => {
    let result = obj;

    if (!fields.length) return;

    for (const field of fields) {
      if (result[field] === null) return null;
      if (!result[field] || typeof(result[field]) === "function") return;

      result = result[field];
    }
    return result;
  };
}
