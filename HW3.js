const userInput3 = prompt("가위, 바위, 보 중 하나를 고르세요");
const com_num = Math.random();
let com = ""

if (com_num > 0.6) {
    com = "가위";
}
else if (com_num > 0.3) {
    com = "바위";
}
else {
    com = "보";
}

if (userInput3 == "가위") {
    if (com == "가위") {
        alert("오~~ 비겼다!");
    }
    else if (com == "바위") {
        alert("승자: 컴퓨터.. 저런....ㅜㅜ");
    }
    else {
        alert("승자: 바로 당신! 짝짝짝!!!");
    }
}
if (userInput3 == "바위") {
    if (com == "가위") {
        alert("승자: 바로 당신! 짝짝짝!!!");
    }
    else if (com == "바위") {
        alert("오~~ 비겼다!");
    }
    else {
        alert("승자: 컴퓨터.. 저런....ㅜㅜ");
    }
}
if (userInput3 == "보") {
    if (com == "가위") {
        alert("승자: 컴퓨터.. 저런....ㅜㅜ");
    }
    else if (com == "바위") {
        alert("승자: 바로 당신! 짝짝짝!!!");
    }
    else {
        alert("오~~ 비겼다!");
    }
}