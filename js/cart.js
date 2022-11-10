const Url_cart = "https://japceibal.github.io/emercado-api/user_cart/25801.json";
var shopping = document.getElementById("buy");
var costos = document.getElementById("costos");


document.addEventListener("DOMContentLoaded", function(){
    getJSONData(Url_cart).then(function(resultObj){
        if (resultObj.status=='ok'){
            CartObj = resultObj.data;
            ShowCart(CartObj.articles);
            showCostos(CartObj.articles) 
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
                        <input id="ctd" oninput="ChangeSubTotal(${carts.unitCost})"type="number" class="InputCtd" >
                    </td>
                    <td class="Distancia"><b><p>${carts.currency}<span id="resultado" class="SubResult">${carts.unitCost}</span></p></b></td>
                    <div>
                </tr>
            </table>

    </div>
    `}
        shopping.innerHTML = htmlContentToAppend;
}
let resSubTotal = 0;

function ChangeSubTotal(precio){
    let ctd = document.getElementById("ctd").value;
    resultado = precio*ctd;
    resSubTotal = precio*ctd;
     document.getElementById("CostoSubTotal").innerHTML = resultado; 
     document.getElementById("resultado").innerHTML = resultado;
} 



function showCostos(array) {
    let htmlContentToAppend = "";
    for(let carts of array){
    htmlContentToAppend += `<div class="container">
          <div class="list-group-item list-group-item-action cursor-active">            
              <h5>Subtotal</h5>
              <div class="d-flex">
                  <p>Costo unitario del producto por cantidad</p>
                  <p id="costo">USD<span id="CostoSubTotal">${carts.unitCost}</span></p>
              </div>
          </div>
          <div class="list-group-item list-group-item-action cursor-active">  
              <h5>Costo de Envío</h5>
              <div class="d-flex flex-row">
                  <p>Según el tipo de envío</p>
                  <p id="envioValor"><span id="envioCosto"></span></p>
                  
              </div>
          </div>
          <div class="list-group-item list-group-item-action cursor-active">  
              <h5>Total($)</h5>
              <div class="d-flex flex-row">
              <p id="Total"><span id="CostoTotal" ></span></p>
              </div>
          </div>`}
costos.innerHTML += htmlContentToAppend;
}

let porcentages = 0;
document.getElementById("Standar").addEventListener("change", function(){
    porcentages = 0.05;
    PrecioEnvio5(porcentages,resSubTotal)
});






function PrecioEnvio5(porcentage){
    console.log(porcentage);

}
/* document.addEventListener("DOMContentLoaded",function calcularSubTotales(){

    var subtotalPrecio = 0;
    var total = 0;
    let celdasPrecio = document.getElementsByClassName("SubResult");
    console.log(celdasPrecio);
    for (let i = 0; i < celdasPrecio.length;++i){
        subtotalPrecio += parseFloat(celdasPrecio[i].firstChild.data);
    };
    resultado = Math.round(porcentage * subtotalPrecio);
    total = (resultado + subtotalPrecio);
    document.getElementById("envioCosto").innerHTML = `USD${resultado}`;
    document.getElementById("CostoTotal").innerHTML = `USD${total}`;

})
 */






















function showModal(){
    let htmlContentToAppend = "";
    htmlContentToAppend = `<div class="modal" tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Modal title</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <p>Modal body text goes here.</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
    `
}

