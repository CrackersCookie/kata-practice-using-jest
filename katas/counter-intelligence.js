const counterIntelligence = (str) => {
  const newStr = str.toUpperCase();
  const letters = newStr.split('');

  const movement = newStr.charCodeAt(str.length - 1) - 88;

  const letterTransformer = (letter) => {
    if (!/[A-Z]/.test(letter)) return letter;
    let newLetterCode = (letter.charCodeAt(0) - movement);
    if (newLetterCode > 90) newLetterCode -= 26;
    const newLetter = String.fromCharCode(newLetterCode)
    return newLetter;
  }

  const newLetters = letters.map(letter => letterTransformer(letter))
  return newLetters.join('')
}

module.exports = { counterIntelligence }