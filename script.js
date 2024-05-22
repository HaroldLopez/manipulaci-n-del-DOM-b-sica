const h1 = document.querySelector('h1');
const input1 = document.querySelector('#Calculo-1');
const input2 = document.querySelector('#Calculo-2');
const btn = document.querySelector('#Calcular');
const parrafo = document.querySelector('#result')
const form = document.querySelector('#formulario')

// form.addEventListener('click', sumarInputs);

// function sumarInputs (event) {


// event.preventDefault();
// const suma = input1.value + input2.value;
// parrafo.innerText = 'Resultado: ' + suma;

// }

btn.addEventListener('click', sumarInputs);

function sumarInputs (event) {

const suma = input1.value + input2.value;
parrafo.innerText = 'Resultado: ' + suma;

}


