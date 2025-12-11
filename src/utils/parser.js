// core-engine/parser.js

/**
 * Parses a string input into a structured data object.
 * Supports a simple key-value pair format separated by '=' and lines separated by '\n'.
 *
 * @param {string} input - The string to parse.
 * @returns {object} - An object representing the parsed data, or null if parsing fails.
 */
function parse(input) {
  if (typeof input !== 'string') {
    return null; // Or throw an error: throw new TypeError("Input must be a string.");
  }

  const result = {};
  const lines = input.split('\n');

  for (const line of lines) {
    const trimmedLine = line.trim();

    // Skip empty lines and comments
    if (!trimmedLine || trimmedLine.startsWith('#')) {
      continue;
    }

    const parts = trimmedLine.split('=', 2); // Limit to 2 parts to handle values with '=' inside

    if (parts.length !== 2) {
      continue; // Skip lines that don't have a key-value pair
    }

    const key = parts[0].trim();
    const value = parts[1].trim();

    if (!key) {
      continue; // Skip lines with empty keys
    }

    result[key] = value;
  }

  return result;
}

/**
 * Validates if the parsed data contains all required keys.
 *
 * @param {object} data - The parsed data object.
 * @param {string[]} requiredKeys - An array of required keys.
 * @returns {boolean} - True if all required keys are present, false otherwise.
 */
function validateData(data, requiredKeys) {
  if (!data || typeof data !== 'object' || !Array.isArray(requiredKeys)) {
    return false; // Or throw an error: throw new TypeError("Invalid input types.");
  }

  for (const key of requiredKeys) {
    if (!Object.prototype.hasOwnProperty.call(data, key)) {
      return false;
    }
  }

  return true;
}

module.exports = {
  parse,
  validateData,
};