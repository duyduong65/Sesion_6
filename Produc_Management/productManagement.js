let products = [];

function addProduct() {
    let product = document.getElementById("addProduct");
    products.push([[product.value][autoIncrease++]]);
    product.value = "";
    display();
}

let list = document.getElementById("listProduct");


function display() {
    let autoIncrease = 0;
    list.innerHTML = "<table style='border: 1px solid black'>";
    for (let i = 0; i < products.length; i++) {
        autoIncrease++;
        list.innerHTML +=
            `<input type="text" disabled value="${products[i]}" id="p-${autoIncrease}"> <tr>
                                <td>
                                    <input type="button"  value="edit" id="${autoIncrease}" onclick="edit(${autoIncrease})">
                                    <input type="button" value="delete" id="${autoIncrease}" onclick="drop()"><br>
                                </td>
                            </tr>`;
    }
    list.innerHTML += "</table>";
}

function edit() {
    for (let i = 1; i < 20; i++) {
        if (document.getElementById('')) {

        }
    }

}

function drop() {

}