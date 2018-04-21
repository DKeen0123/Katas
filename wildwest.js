function dirReduce (array) {
  let counts = {'NORTH': 0, 'SOUTH': 0, 'EAST': 0, 'WEST': 0}
  array.forEach(function(pole) {
    if (pole === 'NORTH') {
      counts['NORTH'] ++
    }
    else if (pole === 'EAST') {
      counts['EAST'] ++
    }
    else if (pole === 'SOUTH') {
      counts['SOUTH'] ++
    }
    else { counts['WEST'] ++ }
  })

  let netNorthSouth = counts['NORTH'] - counts['SOUTH']
  let netEastWest = counts['EAST'] - counts['WEST']

  if (netNorthSouth > 0) {
    return Array(netNorthSouth).fill('NORTH')
  }
  else if (netNorthSouth < 0) {
    return Array(-netNorthSouth).fill('SOUTH')
  }
  else return []
}

if (netNorthSouth > 0) {
  return Array(netNorthSouth).fill('NORTH')
}
else if (netNorthSouth < 0) {
  return Array(-netNorthSouth).fill('SOUTH')
}
else return []
}

var array = ['NORTH','SOUTH', 'SOUTH', 'SOUTH']
console.log(dirReduce(array))
