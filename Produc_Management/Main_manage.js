let arr = ["Sony Xperia", "Samsung Galaxy", "Nokia 6", "Xiaomi Redmi Note 4", "Apple iphone 6s", "Xiaomi 5s Plus", "Apple Iphone 8 Plus", "Fujitsu F-04E", "Oppo A71"];
let element = document.getElementById('inputString');
let dem = 0;
for (let i = 0; i < arr.length; i++) {
    document.getElementsByClassName("element")[dem].innerHTML += arr[i] + +" <br> ";
    document.getElementsByClassName('edit')[dem].innerHTML = "<button><h4>edit</h4></button>";
    document.getElementsByClassName('delete')[dem].innerHTML = " <button><h4>Delete</h4></button>"
    dem++
}

function addElement() {
    arr.push(element.value);
    document.getElementsByClassName('element')[dem].innerHTML += "<h4>" + arr[arr.length - 1] + "<br>" + "</h4>";
    document.getElementById('inputString').value = "";
    document.getElementById('inputString').focus();
    document.getElementsByClassName('edit')[dem].innerHTML = "<button><h4>edit</h4></button>";
    document.getElementsByClassName('delete')[dem].innerHTML = "<button><h4>delete</h4></button>" + "<br>";
    dem++
}

function editProduct(val) {
    switch (val) {
        case 0 :
            document.getElementById('inputString').value = arr[val];
            break;
        case 1 :
            document.getElementById('inputString').value = arr[val];
            break;
        case 2 :
            document.getElementById('inputString').value = arr[val];
            break;
        case 3 :
            document.getElementById('inputString').value = arr[val];
            break;
        case 4 :
            document.getElementById('inputString').value = arr[val];
            break;
        case 5 :
            document.getElementById('inputString').value = arr[val];
            break;
        case 6 :
            document.getElementById('inputString').value = arr[val];
            break;
        case 7 :
            document.getElementById('inputString').value = arr[val];
            break;
        case 8 :
            document.getElementById('inputString').value = arr[val];
            break;
        case 9 :
            document.getElementById('inputString').value = arr[val];
            break;
        case 10 :
            document.getElementById('inputString').value = arr[val];
            break;
        case 11 :
            document.getElementById('inputString').value = arr[val];
            break;
        case 12 :
            document.getElementById('inputString').value = arr[val];
            break;
        case 13 :
            document.getElementById('inputString').value = arr[val];
            break;


    }

}

function deleteProduct() {

}