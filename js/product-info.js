let ProductsId = localStorage.getItem("products.id");//traigo el id de el producto que seleccioné
console.log(ProductsId);//lo muestro en la consola
let catid = localStorage.getItem("catID");

let URL_info= "https://japceibal.github.io/emercado-api/products/"+  ProductsId + ".json";
let url_comments = "https://japceibal.github.io/emercado-api/products_comments/" +  ProductsId  + ".json"
let sendComment = document.getElementById("sendComment");

let productArray = [];
let commentsArray = [];

const verProductInfo = document.getElementById("producto-info");//AGREGO LA INFO DEL PRODUCTO
const verComentarios = document.getElementById("comments");//DONDE AGREGO LOS COMENTARIOS
const verImagenes  = document.getElementById("producto-img"); //DONDE AGREGO LAS IMÁGENES
const relatedImages = document.getElementById("relatedImages");//ACÁ ES DONDE QUIERO MOSTRAR LAS IMÁGENES RELACIONADAS

document.addEventListener("DOMContentLoaded", function(){
    getJSONData(URL_info).then(function(resultObj){
        if (resultObj.status=='ok'){
            array = resultObj.data;
            productArray = array;
            showProduct(productArray);
            showProductImg(productArray.images);
            ShowRelatedImages(productArray.relatedProducts)
            /* console.log(productArray.relatedProducts); */
        }
    })

    getJSONData(url_comments).then(function(resultObj){
        if (resultObj.status=='ok'){
            array = resultObj.data;
            commentsArray = array;
/*             console.log(commentsArray); */
            showComments(commentsArray);

        }
    })
});

function showProduct(array) {
    let htmlContentToAppend = "";
        htmlContentToAppend = `
        <div>
            <div>
                <h2>${array.name}</h2>
                <h5><b>Precio</b></h5>
                <p>${array.cost}</p>    
                <br>
                <h5><b>Descripción</b></h5>
                <p>${array.description}</p>
                <br>
                <h5><b>Categoría</b></h5>
                <p>${array.category}</p>    
                <br>
                <h5><b>Cantidad de Vendidos</b></h5>
                <p>${array.soldCount}</p>    
                <br>
            </div>
        </div>`
    verProductInfo.innerHTML = htmlContentToAppend;
}



function ShowRelatedImages(array){
    let htmlContentToAppend = "";
    for(let relatedImage of array){
        htmlContentToAppend += `
        <div>
            <h6>${relatedImage.name}</h6>
            <img src="${relatedImage.image}" class="ImgRelated">
        </div>`
    }
    relatedImages.innerHTML += htmlContentToAppend;
}


function showProductImg(array){
    let htmlContentToAppend = "";
    for(let producto of array){
        htmlContentToAppend += `
        <img src="${producto}" class="productImg " > 
        `
    }
    verImagenes.innerHTML += htmlContentToAppend;
}

function showScoreStars(score) {
    let htmlContentToAppend = "";
    for (var i = 0; i < score;i++) {
        htmlContentToAppend += `<span class="fa fa-star checked"></span>`
    };
    return(htmlContentToAppend)
}

function showComments(array){
    let htmlContentToAppend = "";
    for(let comments of array){
        htmlContentToAppend += `
        <div class="list-group-item list-group-item-action cursor-active">
        <h6><b>${comments.user}</b>/${comments.dateTime}   ${showScoreStars(comments.score)}</h6>
        <h6>${comments.description}</h6>  
        <br> 
        </div>
         `
    }

    verComentarios.innerHTML += htmlContentToAppend;
}


function addComment() { //FUNCIÓN PARA AGREGAR UN NUEVO COMENTARIO
    let newComment = document.getElementById("comment").value;//OBTENGO EL NUEVO COMENTARIO
    let newScore = document.getElementById("score").value;//OBTENGO LA NUEVA PUNTUACIÓN
    let getUser = localStorage.getItem("text");//TRAIGO EL USUARIO DEL LOCALSTORAGE
    let date = new Date();
    let htmlContentToAppend = "";
    htmlContentToAppend += `
        <div class="list-group-item list-group-item-action cursor-active">
        <h6><b>${getUser}</b>/${date.getFullYear()}-${date.getMonth()}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}  ${showScoreStars(newScore)}</h6>
         <h7>${newComment}</h7>  
        <br> 
        </div>
         `;
         verComentarios.innerHTML += htmlContentToAppend;
}


sendComment.addEventListener("click",function(){
    addComment()
}); //utilizo este evento para agregar el comentario

/* function ShowRelatedImages(array){
    let htmlContentToAppend1 = "";
    let htmlContentToAppend2 = "";

    for(var i = 0;i < array.length;i++) {
        htmlContentToAppend1 = `
            <div class="carousel-item active">
            <img src="${array[0].image}" class="d-block w-100">`
    ;};
    
    for(var j = 1;j < array.length; j++) {
        htmlContentToAppend2 += `
        <div class="carousel-item">
        <img src="${array[1].image}" class="d-block w-100">
        </div>`
    };
    relatedImages.innerHTML += htmlContentToAppend1 + htmlContentToAppend2;
} */