function isPalindrome() {
    let inpuStrPalindrome = prompt("Nhập vào chuỗi cần kiểm tra: ");
    let toArr = inpuStrPalindrome.split("");

    for (let i = 0, j = toArr.length - 1; i <= (toArr.length - 1); i++, j--) {
        if (toArr[i] === toArr[j]) {
            console.log(toArr[i]);
        } else {
            return false
        }
    }
    return true;
}

if (isPalindrome()){
    console.log("string is palindrome");
}else {
    console.log("string is not palindrome");
}