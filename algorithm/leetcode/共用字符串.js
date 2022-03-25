function commonChars(strArr) {
  const size = 26;
  const a = 'a'.charCodeAt();

  const firstHash = new Array(size).fill(0);
  const firstStr = strArr[0];

  for (let i = 0; i < firstStr.length; i++) {
    let idx = firstStr[i].charCodeAt() - a;
    firstHash[idx] += 1;
  }

  for (let i = 1; i < strArr.length; i++) {
    const tmpHash = new Array(size).fill(0);
    for (let j = 0; j < strArr[i].length; j++) {
      let idx = strArr[i][j].charCodeAt() - a;
      tmpHash[idx] += 1;
    }
    // console.log(tmpHash);
    for (let i = 0; i < size; i++) {
      firstHash[i] = Math.min(firstHash[i], tmpHash[i]);
    }
  }

  const result = [];
  for (let i = 0; i < size; i++) {
    while (firstHash[i] > 0) {
      result.push(String.fromCharCode(i + a))
      firstHash[i]--;
    }
  }
  return result;
}


const words = ["bella","label","roller"];
const result = commonChars(words);
console.log(result);
