// reverse a string

var num = [1, 2, 3, 4, 5]
var str = ['a', 'b', 'c', 'd', 'e']

function printReverse(a) {
    for (var i = a.length - 1; i >= 0; i--) {
        console.log(a[i])
    }
    // a.reverse()
    // console.log(a)
}

printReverse(num)
printReverse(str)

// uniform

var a = [1, 1, 1, 1, 1, 1, 1]
var b = [2, 1, 1, 1, 1]

function isUniform(arr) {
    var first = arr[0]
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] !== first) {
            return false
        }
    }
    return true
}

isUniform(a)
isUniform(b)

/*a.forEach(uniform => {
  var b = uniform
  if (a === b) {
    console.log('true')
    return true
  } else {
    console.log('false')
    return false
  }
})*/

// sum of array
var a = [1, 2, 3, 4, 5, 6]

function sumArray(atr) {
    var result = 0
    atr.forEach(function(arr) {
        result += arr
    })
    console.log(result)
    return result

    // const reducer = (addedValue, currentValue) => addedValue + currentValue
    // console.log(i.reduce(reducer))
}

sumArray(a)

// max number in array

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    // spread operator(...) represent all emelents in an array
    // var max = Math.max(...arr)

function max(atr) {
    //return Math.max(...arr)
    var max = atr[0]
    for (i = 1; i < atr.length; i++) {
        if (atr[i] > max) {
            max = atr[i]
        }
    }
    console.log(max)
    return max
}

max(arr);