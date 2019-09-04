const sumConsecutiveDuplicates = arr => {
  if (!arr.length) return [];

  const numArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (numArr.length > 0 && arr[i - 1] === arr[i]) {
      numArr[numArr.length - 1] = numArr[numArr.length - 1] + arr[i];
    } else numArr.push(arr[i]);
  }

  return numArr;
};

module.exports = { sumConsecutiveDuplicates };
