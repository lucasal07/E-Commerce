const CATEGORIES_URL = "https://japceibal.github.io/emercado-api/cats/cat.json";
const PUBLISH_PRODUCT_URL = "https://japceibal.github.io/emercado-api/sell/publish.json";
const PRODUCTS_URL = "https://japceibal.github.io/emercado-api/cats_products/";
const PRODUCT_INFO_URL = "https://japceibal.github.io/emercado-api/products/";
const PRODUCT_INFO_COMMENTS_URL = "https://japceibal.github.io/emercado-api/products_comments/";
const CART_INFO_URL = "https://japceibal.github.io/emercado-api/user_cart/";
const CART_BUY_URL = "https://japceibal.github.io/emercado-api/cart/buy.json";
const EXT_TYPE = ".json";

let storage = localStorage.getItem("user");    //traigo lo que haya guardado en el LocalStorage
console.log(storage);  //Lo muestro en la consola
let data = document.getElementById("data");

let showSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "block";
}

let hideSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "none";
}

let getJSONData = function(url){ 
    let result = {};
    showSpinner();
    return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }else{
        throw Error(response.statusText);
      }
    })
    .then(function(response) {
          result.status = 'ok';
          result.data = response;
          hideSpinner();
          return result;
    })
    .catch(function(error) {
        result.status = 'error';
        result.data = error;
        hideSpinner();
        return result;
    });
}



function removeLocalStorage(){
  localStorage.clear()
}

document.addEventListener("DOMContentLoaded",function(){
let htmlContentToAppend = "";
htmlContentToAppend +=
            `<div class="dropdown">
<a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
  <li id="data" class="nav-item">${storage}</li> 
</a>
<ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
  <li><a class="dropdown-item" href="cart.html">Mi carrito</a></li>
  <li><a class="dropdown-item" href="my-profile.html">Mi Perfil</a></li>
  <li ><a onclick="removeLocalStorage()" class="dropdown-item" href="index.html" >Cerrar Sesión</a></li>
</ul>
</div>`;
data.innerHTML = htmlContentToAppend;

})

/* function addText(){
    data.innerHTML = `<p class="nav-link active">` + storage + `</p>` ;
}

addEventListener("DOMContentLoaded",function(){
    addText();
});
 */
