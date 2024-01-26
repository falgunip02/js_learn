const accountID = 144553;
let accountEmail = "falguni.p0205@gmail.com";
var accountPassword = "1234";
var accCity = "mumbai";

// accountID = 2; // cannot change the const 

/* 
prefer not to use var 
because of issues in block scope and functional scope
*/ 

console.log(accountID);
console.table([accountEmail,accCity,accountID,accountPassword])