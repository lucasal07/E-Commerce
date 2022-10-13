const Url_cart = "https://japceibal.github.io/emercado-api/user_cart/25801.json";
var shopping = document.getElementById("buy");


document.addEventListener("DOMContentLoaded", function(){
    getJSONData(Url_cart).then(function(resultObj){
        if (resultObj.status=='ok'){
            CartObj = resultObj.data;
            console.log(CartObj.articles);
            ShowCart(CartObj.articles);
        }
    })
});
function ShowCart(array) {
    let htmlContentToAppend = "";

    for(let carts of array){
    htmlContentToAppend += `<div class="container title">
            <table>
                <tr>
                    <td class="Distancia"><b>Producto</b></td>
                    <td class="Distancia"><b>Nombre</b></td>
                    <td class="Distancia"><b>Costo</b></td>
                    <td class="Distancia"><b>Cantidad</b></td>
                    <td class="Distancia"><b>Subtotal</b></td>
                </tr>
                <tr>
                    <div class="DivBuyProducto">
                    <td class="Distancia"><img src="${carts.image}" class="ImgCart"></td>
                    <td class="Distancia">${carts.name}</td>
                    <td class="Distancia">${carts.currency}${carts.unitCost}</td>
                    <td class="Distancia">
                        <input id="ctd" type="number" class="InputCtd" >
                    </td>
                    <td class="Distancia"><b>${carts.currency}${carts.unitCost}</b></td>
                    <div>
                </tr>
            </table>

    </div>
    `}
        shopping.innerHTML = htmlContentToAppend;
}


function ChangeSubTotal(precio){
    let ctd = document.getElementsById("ctd").value;
    console.log(ctd)
    let Subtotal = ctd*precio;

    return(Subtotal)
} 

