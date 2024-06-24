const boton = document.querySelector('#calcular');

boton.addEventListener('click', function() {
const total = Number(document.querySelector('#cantidad1').value) +
Number(document.querySelector('#cantidad2').value) +
Number(document.querySelector('#cantidad3').value);

if (total <= 10){
    document.querySelector('#resultado').innerHTML = 'Llevas ' + total + ' stickers';
} else {
    document.querySelector('#resultado').innerHTML = 'Llevas muchos stickers!';
}
});