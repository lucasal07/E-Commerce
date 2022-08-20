
const pError = document.getElementById("pError");

function showAlertError() {
    pError.innerHTML =  ` <div role="alert">
    <p>Alguno de los campos está vacío, porfavor completalo</p>
    </div> `
}

function Validar_Campos() {

    let email = document.getElementById("email");
    let passwordContainer = document.getElementById("password");
    if ((email.value.length === 0) || (passwordContainer.value.length === 0)) {
        showAlertError()
    } 
    else {
          location.href = "index.html"; 
        }
}




let ButtonIngr = document.getElementById("botonIngresar");
ButtonIngr.addEventListener("click",function(){
    Validar_Campos()
})


// function Validar_Campos() {

//     var email = document.getElementById("email").value;
//     var password = document.getElementById("password").value;
//     if ((email.length == 0) || (password.length === 0)) {
//         console.log("los campos son 0");
//     } 
//     else {
//         if (password.length <= 6) {
//             showAlertError();
//             console.log("La contraseña tiene menos de 6 caracteres");
//         } else {
//                 alert("podes ir al index");
//                     boton.addEventListener("click", function(){
//                         location.href="index.html"
//                     });

//             }
//     }
// }  

// document.addEventListener("click",function(){

//     this.location.href="index.html"
//   })

