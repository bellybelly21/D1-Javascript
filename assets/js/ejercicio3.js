const boton = document.querySelector('#verificar');

boton.addEventListener('click', function () {

    const password = document.querySelector('#numero1').value + document.querySelector('#numero2').value + document.querySelector('#numero3').value;

    if (password === '911') {
        document.querySelector('#resultado').innerHTML = 'password 1 correcto';
    } else if (password === '714') {
        document.querySelector('#resultado').innerHTML = 'password 2 correcto';
    } else {
        document.querySelector('#resultado').innerHTML = 'password incorrecto';
    }
});