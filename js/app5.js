let string1 = prompt("Enter a string 1");
let string2 = prompt("Enter a tring 2");
let a = string1.normalize();
let b = string2.normalize();
console.log(a);
console.log(b);
let result = a === b?"2 chuỗi giống nhau!":"2 chuỗi khác nhau !";
alert(result);