/**
 * @param {boolean} isCapital. Default false value for lower case characters, true for capitals
 * @returns {Array} of Unicode characters of the latin alphabet
 */

const getAlphabet = (isCapital = false) => {
    if (typeof isCapital !== 'boolean') {
        throw new Error('Boolean value expected.');
    }
    const characters = [];
    const OFFSET = isCapital ? 65 : 97;
    for (let index = 0; index < 26; index++) {
        characters.push(String.fromCharCode(OFFSET + index));
    }
    return characters;
};