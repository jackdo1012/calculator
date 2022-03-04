let answerInnerHTML = "0";
let answer = 0;
const operatorList = ["+", "-", "*", "/"];

const updateDisplay = () => {
    if (answerInnerHTML.length > 78) {
        answerInnerHTML = answerInnerHTML.slice(0, -1);
    }
    answerBoxEle.innerHTML = answerInnerHTML;
    localStorage.setItem("a", answerInnerHTML);
};
const calculate = () => {
    answer = eval(answerInnerHTML);
    answerInnerHTML = answer.toString();
    updateDisplay();
};

window.onload = () => {
    answerInnerHTML = localStorage.getItem("a") || "0";
    updateDisplay();
};

const answerBoxEle = document.querySelector(".answer-box");

const clearEle = document.querySelector(".clear");
clearEle.onclick = () => {
    answerInnerHTML = "0";
    updateDisplay();
};

const deleteEle = document.querySelector(".delete");

deleteEle.onclick = () => {
    answerInnerHTML =
        answerInnerHTML.length > 1 ? answerInnerHTML.slice(0, -1) : "0";
    updateDisplay();
};

const divideEle = document.querySelector(".divide");
divideEle.onclick = () => {
    if (
        !operatorList.includes(answerInnerHTML[answerInnerHTML.length - 1]) &&
        answerInnerHTML[answerInnerHTML.length - 1] !== "."
    ) {
        answerInnerHTML += "/";
        updateDisplay();
    }
};

const sevenEle = document.querySelector(".seven");
sevenEle.onclick = () => {
    if (answerInnerHTML === "0") {
        answerInnerHTML = "7";
    } else {
        answerInnerHTML += "7";
    }
    updateDisplay();
};

const eightEle = document.querySelector(".eight");
eightEle.onclick = () => {
    if (answerInnerHTML === "0") {
        answerInnerHTML = "8";
    } else {
        answerInnerHTML += "8";
    }
    updateDisplay();
};

const nineEle = document.querySelector(".nine");
nineEle.onclick = () => {
    if (answerInnerHTML === "0") {
        answerInnerHTML = "9";
    } else {
        answerInnerHTML += "9";
    }
    updateDisplay();
};

const timesEle = document.querySelector(".times");
timesEle.onclick = () => {
    if (
        !operatorList.includes(answerInnerHTML[answerInnerHTML.length - 1]) &&
        answerInnerHTML[answerInnerHTML.length - 1] !== "."
    ) {
        answerInnerHTML += "*";
        updateDisplay();
    }
};

const fourEle = document.querySelector(".four");
fourEle.onclick = () => {
    if (answerInnerHTML === "0") {
        answerInnerHTML = "4";
    } else {
        answerInnerHTML += "4";
    }
    updateDisplay();
};

const fiveEle = document.querySelector(".five");
fiveEle.onclick = () => {
    if (answerInnerHTML === "0") {
        answerInnerHTML = "5";
    } else {
        answerInnerHTML += "5";
    }
    updateDisplay();
};

const sixEle = document.querySelector(".six");
sixEle.onclick = () => {
    if (answerInnerHTML === "0") {
        answerInnerHTML = "6";
    } else {
        answerInnerHTML += "6";
    }
    updateDisplay();
};

const plusEle = document.querySelector(".plus");
plusEle.onclick = () => {
    if (
        !operatorList.includes(answerInnerHTML[answerInnerHTML.length - 1]) &&
        answerInnerHTML[answerInnerHTML.length - 1] !== "."
    ) {
        answerInnerHTML += "+";
        updateDisplay();
    }
};

const oneEle = document.querySelector(".one");
oneEle.onclick = () => {
    if (answerInnerHTML === "0") {
        answerInnerHTML = "1";
    } else {
        answerInnerHTML += "1";
    }
    updateDisplay();
};

const twoEle = document.querySelector(".two");
twoEle.onclick = () => {
    if (answerInnerHTML === "0") {
        answerInnerHTML = "2";
    } else {
        answerInnerHTML += "2";
    }
    updateDisplay();
};

const threeEle = document.querySelector(".three");
threeEle.onclick = () => {
    if (answerInnerHTML === "0") {
        answerInnerHTML = "3";
    } else {
        answerInnerHTML += "3";
    }
    updateDisplay();
};

const minusEle = document.querySelector(".minus");
minusEle.onclick = () => {
    if (
        !operatorList.includes(answerInnerHTML[answerInnerHTML.length - 1]) &&
        answerInnerHTML[answerInnerHTML.length - 1] !== "."
    ) {
        answerInnerHTML += "-";
        updateDisplay();
    }
};

const periodEle = document.querySelector(".period");
periodEle.onclick = () => {
    const temp = answerInnerHTML.split(".");
    let valid = false;
    if (
        !answerInnerHTML.includes(".") ||
        temp[temp.length - 1].includes(operatorList[0]) ||
        temp[temp.length - 1].includes(operatorList[1]) ||
        temp[temp.length - 1].includes(operatorList[2]) ||
        temp[temp.length - 1].includes(operatorList[3])
    ) {
        valid = true;
    }
    if (valid) {
        answerInnerHTML += ".";
        updateDisplay();
    }
};

const zeroEle = document.querySelector(".zero");
zeroEle.onclick = () => {
    if (answerInnerHTML === "0") {
        answerInnerHTML = "0";
    } else {
        answerInnerHTML += "0";
    }
    updateDisplay();
};

const equalsEle = document.querySelector(".equals");
equalsEle.onclick = calculate;
