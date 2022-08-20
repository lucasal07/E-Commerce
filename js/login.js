
const pError = document.getElementById("pError");

function showAlert() {
    pError.innerHTML =  ` <divrole="alert">
    <p>Alguno de los campos está vacío, porfavor completalo</p>
    </div> `
}

function TestCampos() {

    let email = document.getElementById("email");
    let passwordContainer = document.getElementById("passwordContainer");
    if ((email.value.length === 0) || (passwordContainer.value.length === 0)) {
        showAlert()
    } 
    else {
          location.href = "index.html"; 
        }
}




let ButtonIngr = document.getElementById("buttonIngr");
ButtonIngr.addEventListener("click",function(){
    TestCampos();
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

