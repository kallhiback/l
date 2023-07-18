function checkDataType(data) {
    let dataType = typeof data
    console.log(dataType)
}

checkDataType(42)
checkDataType("Hello, World!")
checkDataType(true)

function reverseString(str) {
    let reversedStr = ""
    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i]
    }
    return reversedStr
}

let originalString = "Hello, World!"
let reversedString = reverseString(originalString)
console.log(reversedString)




