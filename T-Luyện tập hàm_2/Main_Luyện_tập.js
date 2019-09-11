function ex_1() {
    let inputNumber = Number(prompt("Nhập vào số cần tính: "));
    let square = inputNumber * inputNumber;
    alert("Bình phương của " + inputNumber + " là: " + square);
}

function acreage() {
    let radius = Number(prompt("Nhập vào bán kính: "));
    let perimeter = Math.PI * radius * 2;
    let acreage = Math.PI * radius * radius;
    alert("Chu vi hình tròn là: " + perimeter);
    alert("Diện tích hình tròn là: " + acreage);
}

function factorial() {
    let inputNumber = Number(prompt("Nhập vào số cần tính: "));
    let factorial = 1;
    for (let i = inputNumber; i > 0; i--) {
        factorial = factorial * i;
    }
    alert("giai thừa của " + inputNumber + " là: " + factorial);
}