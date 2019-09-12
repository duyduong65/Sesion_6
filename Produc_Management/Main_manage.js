let arr = ["Sony Xperia", "Samsung Galaxy", "Nokia 6", "Xiaomi Redmi Note 4", "Apple iphone 6s", "Xiaomi 5s Plus", "Apple Iphone 8 Plus", "Fujitsu F-04E", "Oppo A71"];
let element = document.getElementById('inputString');
let dem = 0;
for (let i = 0; i < arr.length; i++) {
    document.getElementsByClassName("element")[dem].innerHTML = arr[i] +" <br> ";
    document.getElementsByClassName('edit')[dem].innerHTML = "<button><h4>edit</h4></button>";
    document.getElementsByClassName('delete')[dem].innerHTML = " <button><h4>Delete</h4></button>"
    dem++
}

function addElement() {
    arr.push(element.value);
    document.getElementsByClassName('element')[dem].innerHTML += arr[arr.length - 1] + "<br>";
    document.getElementById('inputString').value = "";
    document.getElementById('inputString').focus();
    document.getElementsByClassName('edit')[dem].innerHTML = "<button><h4>edit</h4></button>";
    document.getElementsByClassName('delete')[dem].innerHTML = "<button><h4>delete</h4></button>" + "<br>";
    dem++
}

let str = document.getElementById('inputString');

function fix() {
    for (let i = 0; i < arr.length; i++) {
        if (str.value == arr[i]) {
            let conVertProduct = prompt("Nhập vào tên muốn đổi: ");
            arr[i] = conVertProduct;
            document.getElementsByClassName('element')[i].innerHTML = arr[i];
            document.getElementById('inputString').value = "";
            document.getElementById('inputString').focus();

        }
    }
}

function editProduct(val) {
    switch (val) {
        case 0 :
            str.value = arr[val];
            break;
        case 1 :
            str = arr[val];
            break;
        case 2 :
            str.value = arr[val];
            break;
        case 3 :
            str.value = arr[val];
            break;
        case 4 :
            str.value = arr[val];
            break;
        case 5 :
            str.value = arr[val];
            break;
        case 6 :
            str.value = arr[val];
            break;
        case 7 :
            str.value = arr[val];
            break;
        case 8 :
            str.value = arr[val];
            break;
        case 9 :
            str.value = arr[val];
            break;
        case 10 :
            str.value = arr[val];
            break;
        case 11 :
            str.value = arr[val];
            break;
        case 12 :
            str.value = arr[val];
            break;
        case 13 :
            str.value = arr[val];
            break;
    }

}

function deleteProduct() {

}