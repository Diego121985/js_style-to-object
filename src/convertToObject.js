'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  const parts = sourceString.split(";")
 parts.forEach((parte) => {
  const trimmed = parte.trim();

  if (!trimmed) return;

  const [key, value] = trimmed.split(":");

  if(!key || !value) return;

  result[key.trim()] = value.trim();
 })

 return result;

}


module.exports = convertToObject;
