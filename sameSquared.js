// Given two arrays a and b write a function comp(a, b) (compSame(a, b) in Clojure) that checks whether the two arrays have the "same" elements, with the same multiplicities. "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.
function comp(arr1, arr2) {
    if(arr1.length === 0 || arr2.length === 0) return false
    let squaredArr1 = arr1.map(function (num) { return num * num })
    let breakOut;
    let result = true
      squaredArr1.forEach(function(element) {
          breakOut = false
        arr2.forEach(function(number){
            if (element === number){ 
                 breakOut = true
                 console.log('inside the inner loop', breakOut)
                 return;
            }
        })
       if(breakOut = false) {
           result = false
       }
    });
    console.log('final line', breakOut)
    return result
}

a1 = [121, 144, 19, 161, 19, 144, 19, 11];
a2 = [11 * 11, 121 * 121, 144 * 144, 19 * 19, 161 * 161, 19 * 19, 144 * 144, 19 * 19];
a3 = [4, 6, 5]
a4 = [121, 144, 19, 171, 19, 144, 19, 11];
a5 = [42]
a6 = [1764]

console.log(comp(a5, a6))

    // let squaredArr1 = arr1.map(function(num) { return num * num })
    // let sumArr1 = squaredArr1.reduce(function(a, b) {return a + b})
    // let sumArr2 = arr2.reduce(function (a, b) { return a + b })
    // return sumArr1 === sumArr2