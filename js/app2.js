let stringFullName = prompt("Hãy nhập vào 1 chuỗi bất kỳ :")
let arrFullName = stringFullName.split("");
let firstIndex = 0;
let lastIndex = arrFullName.length - 1;
let bridge;
for (let i = 0; i < (arrFullName.length - 1) / 2; i++) {
    bridge = arrFullName[firstIndex + i];
    arrFullName[i] = arrFullName[lastIndex - i]
    arrFullName[lastIndex - i] = bridge;
}
let result = arrFullName.join("");
alert("Chuỗi đó sau khi đảo ngược lại là : " + result);