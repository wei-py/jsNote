function KaprekarNum( input = 2136 ) {
  // write code here
  function sortNum(input, sort) {
      input = input.toString().split('').map(item => parseInt(item))
      if (sort === 1) { // 升序
          input.sort((a, b) => b - a);
      } else {
          input.sort((a, b) => a - b);
      }
      return parseInt(input.join(''));
  }
  let changeNums = 0;
  while (input !== 6174) {
    console.log(sortNum(input, 0), sortNum(input, 1));
      input = sortNum(input, 1) - sortNum(input, 0);
      console.log(input);
      changeNums++;
  }
  return changeNums;
}

console.log(KaprekarNum())