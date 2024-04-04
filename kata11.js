const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub']

function averageWord(param) {
  let sumNumbers = 0
  let sumLengths = 0
  let countNumbers = 0
  let countStrings = 0

  for (let i = 0; i < param.length; i++) {
    if (typeof param[i] === 'number') {
      sumNumbers += param[i]
      countNumbers++
    } else if (typeof param[i] === 'string') {
      sumLengths += param[i].length
      countStrings++
    }
  }

  const averageNumbers = sumNumbers / countNumbers
  const averageLengths = sumLengths / countStrings
  const totalAverage = (sumNumbers + sumLengths) / param.length

  return {
    averageNumbers,
    averageLengths,
    totalAverage
  }
}

console.log(averageWord(mixedElements))
