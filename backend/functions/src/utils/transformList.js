/**
 * Transforms every element of an array applying a convertion function.
 * @param {Array} elements an array of items to be transformed.
 * @param {Function} convertionFunction function to be used to transform the elements in the array.
 * @param {String} lang The language to be used to localize the fields. English by default.
 */
export default function transformList(elements, convertionFunction, lang = 'en') {
  const convertedElements = [];
  if (elements && elements.length > 0) {
    elements.forEach((element) => {
      convertedElements.push(convertionFunction(element, lang));
    });
  }

  return convertedElements;
}
