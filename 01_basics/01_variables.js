const accountId = 121212
console.log(accountId)
// accountId = 101010
// console.log(accountId)
// in constant variable it is not modified
let accountEmail = "rv@gamil.com"
var accountPassword = "123@123"
city = "ahmedabad"

console.table([accountId,accountEmail,accountPassword,city])

accountEmail = "rvp@gamil.com"
accountPassword = "123@456"
city = "surat"

console.table([accountId,accountEmail,accountPassword,city])
let accountState
//variable default value is undefined
console.table([accountId,accountEmail,accountPassword,city,accountState])