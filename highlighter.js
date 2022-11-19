const codeSnip = document.querySelector("code-cpp");
const codeArr = codeSnip.textContent.split(" ");

function colorize(string, color) {
    string = `<span style="color:` + color + `">` + string + `</span> `;
    return string;
}


for (let i = 0; i < codeArr.length; i++) {
    if (codeArr[i].includes("<") || codeArr[i].includes(">")) {
        codeArr[i] = codeArr[i].replace("<", "&lt");
        codeArr[i] = codeArr[i].replace(">", "&gt")
    }

    if (codeArr[i] == "#include") {
        codeArr[i] = colorize(codeArr[i], "#fb4934");
    } else if (codeArr[i] == "&ltiostream&gt") {
        codeArr[i] = colorize(codeArr[i], "#d79921");
    }
}


codeSnip.innerHTML = codeArr[0] + codeArr[1];