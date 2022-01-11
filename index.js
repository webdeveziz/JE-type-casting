// Приведение типов в JavaScript - number, boolean и string
let firstVariable = 28
console.log(
  '🚀 firstVariable - ',
  String(firstVariable),
  Boolean(firstVariable),
  Number(firstVariable)
)

let myName = 'Eziz' //В случае когда мы переобразуем на число строку myName получим NaN!
console.log('🚀 myName - ', String(myName), Boolean(myName), Number(myName))

let noObj = null
console.log('🚀 noObj - ', String(noObj), Boolean(noObj), Number(noObj))

let isTrueOrFalse = true
console.log(
  '🚀 isTrueOrFalse - ',
  String(isTrueOrFalse),
  Boolean(isTrueOrFalse),
  Number(isTrueOrFalse)
)

let options = { color: 'red', size: 22 }
console.log('🚀 options - ', String(options), Boolean(options), Number(options))

let justUndefined = undefined
console.log(
  '🚀 justUndefined - ',
  String(justUndefined),
  Boolean(justUndefined),
  Number(justUndefined)
)

let idObj = Symbol('id') // Number(idObj)- при таком преобразовани будет давать ошибку js - Cannot convert a Symbol value to a number
console.log('🚀 idObj - ', String(idObj), Boolean(idObj))

let myFavoriteBigint = BigInt(123456789)
console.log(
  '🚀 myFavoriteBigint - ',
  String(myFavoriteBigint),
  Boolean(myFavoriteBigint),
  Number(myFavoriteBigint)
)
