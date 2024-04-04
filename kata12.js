const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
]

function removeDuplicates(param) {
  let Array = []

  for (let i = 0; i < param.length; i++) {
    if (Array.indexOf(param[i]) === -1) {
      Array.push(param[i])
    }
  }

  return Array
}

console.log(removeDuplicates(duplicates))
