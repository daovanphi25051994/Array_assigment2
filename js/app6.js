let enterString = prompt("Hãy nhập vào 1 chuỗi ");
let arrEnterString = enterString.split("");
for (let i = 0; i < arrEnterString.length; i++) {
    if (arrEnterString[i] === "-") {
        arrEnterString[i] = "_";
    }
}
let result = arrEnterString.join("");
alert(result);