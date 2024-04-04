const placesToTravel = [
  'Japon',
  'Venecia',
  'Murcia',
  'Santander',
  'Filipinas',
  'Madagascar'
]
for (let i = placesToTravel.length; i < placesToTravel.length; i++) {
  let place = placesToTravel[i]
  console.log(place)
}

for (let place of placesToTravel) {
  console.log(place)
}
