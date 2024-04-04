const nameFinder = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
]

function finderName(array, value) {
  const index = array.indexOf(value)

  if (index !== -1) {
    return {
      found: true,
      index
    }
  } else {
    return {
      found: false
    }
  }
}

console.log(finderName(nameFinder, 'Tony')) // Output: { found: true, index: 2 }
console.log(finderName(nameFinder, 'Loki')) // Output: { found: false }
