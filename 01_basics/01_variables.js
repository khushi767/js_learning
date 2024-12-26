const accountId = 144553
let accountEmail= "khushi123@google.com"
var accountpassword="12345"
accountCity= "jaipur"
let accountState;       //agr kuj define ni kra to undefine show hoga

//accountId=2  //not allowed to change const value
console.log(accountId);

accountEmail="khushi@google.com"
accountPassword="212121"
accountCity="Bengaluru"
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

//Javascript me const declare krne ka ik hi method hai, but variables ko let and var dono se kr skte but var use in krte due to scope problem
//javascript scope ke basis pe work ni krti thi , like global and local scope
//so mostly let is used
/*
Prefer not to use var 
because of issue in block scope and functional scope
*/