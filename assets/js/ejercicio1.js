var imagen = document.getElementById("imagen");

imagen.onclick = function() {
    if (imagen.style.border){
        imagen.style.border = "";
    } else {
        imagen.style.border = "2px solid red";
    }
};