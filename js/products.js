




const container = document.getElementById("container"); //traigo utilizando Dom el div donde quiero mostrar el array
let verProductos = document.getElementById("verProductos");//párrafo donde quiero mostrar el título secundario
let catId = localStorage.getItem("catID");

const URL_Products = "https://japceibal.github.io/emercado-api/cats_products/"+ catId + ".json"; //url donde se ubica el archivo .json

let btnDescendente = document.getElementById("sortPriceDesc");//Botón para ordenar por precio de forma descendente
let btnAscendente = document.getElementById("sortPriceAsc");//Botón para ordenar po0r precio de forma ascendente
let btnRel = document.getElementById("sortRel"); //Botón para ordenar por relevancia según la cantidad de artículos vendidos

let btnFiltrar = document.getElementById("FilterCount"); //Botón con el cual filtro para luego mostrar lo que deseo en pantalla
let filterMax = document.getElementById("FilterCountMax"); //Filtro de precio máximo
let filterMin = document.getElementById("FilterCountMin"); //Filtro de precio míninmo

let productsArray = []; //array donde guardo los datos traidos de la url
let productsArrayFilter = []; //array donde guardo el array products con los filtros aplicados

let ProductsID = document.getElementsByName("producto");


document.addEventListener("DOMContentLoaded", function(){
    getJSONData(URL_Products).then(function(resultObj){
        if (resultObj.status=='ok'){
            array = resultObj.data;
            productsArray = array.products;
            productsArrayFilter = array.products;

            console.log(array);

            ShowProductos(array.products);//Muestro los products del array
            addTitle(array.catName);//muestro el catName
            
            console.log(array.catName)//muestro en consola el nombre de la categoría
        }
    })
});



function ShowProductos(array) { //Función para mostrar los datos obtenidos de la url
    let htmlContentToAppend = "";
    for (let productos of array) {
            htmlContentToAppend += `
        <div onclick="setProductID(${productos.id})"  class="list-group-item list-group-item-action cursor-active">
            <div onclick="setProductName(${productos.name})">
                <div class="row">
                    <div class="col-3">
                        <img src="${productos.image}" alt="${productos.description}" class="img-thumbnail">
                    </div>
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">${productos.name}</h4>
                            <small class="text-muted">${productos.soldCount} artículos vendidos</small>
                        </div>
                        <p class="mb-1">${productos.description}</p>
                    </div>
                </div>
            </div>    
        </div>
        `
    }

    container.innerHTML = htmlContentToAppend;
}

function addTitle(CatName){ //Función para agregar el subtítulo con el nombre de la categoría deseado
    let htmlContentToAppend = "";
    htmlContentToAppend += `<p>Verás aquí todos los productos de la categoría ${CatName}</p>`

    verProductos.innerHTML =  htmlContentToAppend;
}

btnDescendente.addEventListener("click",function() { //función que utiliza el botón btnDescendente para ordenar el array dependiendo del precio de forma descedente
    console.log(productsArray);
    productsArray.sort((a, b) => {
        if(a.cost > b.cost ){return -1;}
        if(a.cost < b.cost){return 1;}
        return 0;
    });
    ShowProductos(productsArray);
});

btnAscendente.addEventListener("click",function() { //función que utiliza el botón btnAscendente para ordenar el array dependiendo del precio de forma ascendente
    console.log(productsArray);
    productsArray.sort((a, b) => {
        if(a.cost < b.cost ){return -1;}
        if(a.cost > b.cost){return 1;}
        return 0;
    });
    ShowProductos(productsArray);
});

btnRel.addEventListener("click",function() { //función que utiliza el botón btnRel para ordenar el array dependiendo de la ctd de productos vendidos
    console.log(productsArray);
    productsArray.sort((a, b) => {
        if(a.soldCount > b.soldCount){return -1;}
        if(a.soldCount < b.soldCount){return 1;}
        return 0;
    });
    ShowProductos(productsArray);
});

btnFiltrar.addEventListener("click", function(){

    //Defino la variable donde se guarda lo que el usuario ingresa como valor mínimo
    let min;
    if (filterMin.value !== '' && filterMin.value !== undefined) {
        min = filterMin.value;
    } else {
         min = 0;
    };
    
    //Defino la variable donde se guarda lo que el usuario ingresa como valor máximo
    let max;
    if (filterMax.value !== '' && filterMax.value !== undefined) {
        max = filterMax.value;
    } else {
        max = +Infinity;
    };

    console.log(min);
    console.log(max);
    productsArrayFilter = productsArray.filter(productsArray => productsArray.cost >= min && productsArray.cost <= max); //utilizo filter para obtener el array que quiero
    ShowProductos(productsArrayFilter);// muestro en pantalla el array obtenido anteriormente
})

document.getElementById("Clear").addEventListener("click", function(){
    document.getElementById("FilterCountMin").value = "";//hago que el valor que fue ingresado por el usuario en min sea null
    document.getElementById("FilterCountMax").value = "";//hago que el valor que fue ingresado por el usuario en max sea null

    min = undefined;
    max = undefined;

    ShowProductos(productsArray);//vuelvo a mostrar el array original
});

function setProductID(id) {
    localStorage.setItem("products.id", id);
    window.location = "product-info.html";
}





