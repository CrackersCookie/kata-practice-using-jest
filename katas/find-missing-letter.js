const findMissingLetter = (arr) => {
  let missingLetter = '';

  arr.forEach((letter, index) => {
    if (!index) return letter;
    else {
      const previousLetter = arr[index - 1]
      if (letter.charCodeAt(0) - previousLetter.charCodeAt(0) > 1) {
        missingLetter += String.fromCharCode(letter.charCodeAt(0) - 1)
      }
    }
  })

  return missingLetter
}

module.exports = { findMissingLetter }