function spinWords(string){
  var splitStringArray = string.split(' ')
  var reversedArray = spinArray(splitStringArray)
  return reversedArray.join(' ')
};

function spinArray(array) {
  return array.map(function (word, i) {
    if (word.length >= 5) {
      return word.split('').reverse().join('')
    }
    return word
  })
}

console.log(spinWords('spin me really right round'));
