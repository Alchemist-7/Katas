const counterWords = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'upgrade',
  'code'
]

function repeatCounter(param) {
  const wordCount = {}
  for (let i = 0; i < param.length; i++) {
    const word = param[i]
    if (wordCount[word]) {
      wordCount[word]++
    } else {
      wordCount[word] = 1
    }
  }
  return wordCount
}

console.log(repeatCounter(counterWords))
