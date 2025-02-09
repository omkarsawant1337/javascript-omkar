const accountId = 144553
let accountEmail = "omkar@google.com"
var accountPassword ="12345"
accountCity = "Mumbai"
let accountState;
// accountId = 2 not allowed

accountEmail = "hvaja@jgjk.com"
accountPassword = "212121233"
accountCity = "delhi"

console.log(accountId);

/*
prefer not to use var
becoz of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity ,accountState])