let arr = ["Sony Xperia"];
let element = document.getElementById('inputString');
for (let i = 0; i < arr.length; i++) {
    document.getElementById("elementAraay").innerHTML += "<h4>" + arr[i] + "</h4>" + " <br> ";
    document.getElementById('edit_1').innerHTML = "<button><h4>edit</h4></button>" ;
    document.getElementById('delete').innerHTML = " <button><h4>Delete</h4></button>"
}
let dem=0;
function addElement() {
    arr.push(element.value);
    dem++
    document.getElementById('element').innerHTML += "<h4>" + arr[arr.length - 1] + "<br>" + "</h4>";
    document.getElementById('inputString').value = "";
    document.getElementById('inputString').focus();
    document.getElementsByClassName('edit')[dem].innerHTML = "<button><h4>edit</h4></button>";
    document.getElementsByClassName('delete')[dem].innerHTML = "<button><h4>delete</h4></button>"+"<br>";




}

// document.getElementById('delete').innerHTML = " <button>edit</button>";
// , "Samsung Galaxy", "Nokia 6", "Xiaomi Redmi Note 4", "Apple iphone 6s", "Xiaomi 5s Plus", "Apple Iphone 8 Plus", "Fujitsu F-04E", "Oppo A71"