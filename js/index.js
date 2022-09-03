document.addEventListener("DOMContentLoaded", function(){
    //AUTOS
    document.getElementById("autos").addEventListener("click", function() {
        localStorage.setItem("catID", 101);
        window.location = "products.html"
    });
    //JUGUETES
    document.getElementById("juguetes").addEventListener("click", function() {
        localStorage.setItem("catID", 102);
        window.location = "products.html"
    });
    //MUEBLES
    document.getElementById("muebles").addEventListener("click", function() {
        localStorage.setItem("catID", 103);
        window.location = "products.html"
    });
});

let storage = localStorage.getItem("text");    //traigo lo que haya guardado en el LocalStorage
console.log(storage);  //Lo muestro en la consola

let data = document.getElementById("data");

function addText(){
    data.innerHTML = `<p class="nav-link active">` + storage + `</p>` ;
}

addEventListener("DOMContentLoaded",function(){
    addText();
});