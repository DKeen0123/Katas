function accum(s) {
   let stringArray = s.split('')
   let capitalisedArray = upCaseArray(stringArray)
   return letterPrinter(capitalisedArray).join('-')
}

function upCaseArray(array) {
    return array.map(function (letter) {
        return letter.toUpperCase()
    });
}

function letterPrinter(array) {
    return array.map(function (letter, index) {
        return letter + letter.toLowerCase().repeat(index)
    })
}



console.log(accum("abcd"))