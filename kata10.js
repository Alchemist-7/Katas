const numbers = [12, 21, 38, 5, 45, 37, 6]
function average(param) {
  let promedio = 0
  for (let i = 0; i < param.length; i++) {
    promedio += param[i] / param.length
  }
  return promedio
}
console.log(average(numbers))
