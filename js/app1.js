let arrFullName = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
let html = "";
for (let i = 0; i < arrFullName.length; i++) {
    html += "row " + i;
    html += "<br>"
    for (let j = 0; j < arrFullName.length; j++) {
        html += arrFullName[i][j] + "<br>";
    }
    html += "<br>"
}
document.write(html);