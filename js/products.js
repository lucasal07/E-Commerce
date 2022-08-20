




const container = document.getElementById("container"); //traigo utilizando Dom el div donde quiero mostrar el array
const URL_Products = "https://japceibal.github.io/emercado-api/cats_products/101.json"; //url donde se ubica el archivo .json
let products = [];



function ShowProductos(array) {
    let htmlContentToAppend = "";
    for (const products of array) {
            htmlContentToAppend += `
        <div onclick="setCatID(${products.id})" class="list-group-item list-group-item-action cursor-active">
            <div class="row">
                <div class="col-3">
                    <img src="${products.image}" alt="${products.description}" class="img-thumbnail">
                </div>
                <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                        <h4 class="mb-1">${products.name}</h4>
                        <small class="text-muted">${products.soldCount} artículos vendidos</small>
                    </div>
                    <p class="mb-1">${products.description}</p>
                </div>
            </div>
        </div>
        `
    }

    container.innerHTML = htmlContentToAppend;
}

document.addEventListener("DOMContentLoaded", function(){
    getJSONData(URL_Products).then(function(resultObj){
        if (resultObj.status=='ok'){
            array = resultObj.data;
            console.log(array);
            Productos = array.products;
            ShowProductos(Productos);
        }
    })
})



