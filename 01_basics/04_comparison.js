// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);
// console.log("02" > 1);

console.log(null > 0);    
console.log(null == 0);
console.log(null >= 0);       

/* the reason is that the eqaulity check and comparisons works differently,
comparisons convert the null value into number i.e zero */

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// ===  strict check => check for datatype and value both

console.log("2" === 2);