// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

/* 

EVENTOS 

Un evento son interacciones (hacer, scroll, terminar de cargar, hacer click etc)

Al igual que los callbacks los eventos reciben parametros de forma automatica. Reciben el parametro event, que lo ue hace es guardar toda la información del evento y devovlerla como objeto. 



const buttonElement = document.getElementById('button');

const printClick = () => {
  console.log('CLICK');
};

buttonElement.addEventListener('click', printClick);

const printClick2 = event => {
  console.log(event);
};

buttonElement.addEventListener('click', printClick2);

*/

// - Crea un botón en tu página HTML y añade un evento de click que muestre en la consola el texto del botón al hacer click.

const buttonElement = document.getElementById('button');

const printClick = () => {
  console.log(buttonElement.textContent);
};

buttonElement.addEventListener('click', printClick);

// - Crea un h1 con el texto "Soy un título ", al ponerte con el ratón encima del h1, deberá cambiar al texto a "Quita de encima!!!" y al quitarte, deberá volver a poner "Soy un título"

const titleElement = document.getElementById('title');
const originalText = titleElement.textContent;

const titleHover = () => {
  titleElement.textContent = 'Quita de encima!!';
};

const normalTitle = () => {
  titleElement.textContent = originalText;
};

titleElement.addEventListener('mouseover', titleHover);
titleElement.addEventListener('mouseout', normalTitle);

// - Agrega un evento de cambio de tamaño de ventana y te muestre por consola el tamaño de la ventana.

const printInfo = () => {
  console.log(window.innerWidth, window.innerHeight);
};

window.addEventListener('resize', printInfo);

// - Crea un p con el texto "esperando entrada de teclado" al pulsar cualquier tecla deberá poner qué tecla has pulsado.

const textElement = document.getElementById('text');

const keyboardLetter = event => {
  textElement.textContent = `Has pulsado ${event.key}`;
};

window.addEventListener('keydown', keyboardLetter);

// - Crea un array con 5 palabras. Añade un h2 a tu HTML y ponle un id. Añade dos botones con el texto previus y next respectívamente. Haz que los botones cambien el texto del h2 con las palabras del array, cuando llegues a la última volverás a la primera si pulsas next y cuando estés en la primera podrás volver a la última dandole a previous.

/*

const posibleTitle = ['hola', 'adios', 'gato', 'cosa', 'palabra'];
const subtitleElement = document.getElementById('subtitle');
const previousButtonElement = document.getElementById('previous');
const nextButttonElement = document.getElementById('next');

let index = -1;

const nextWord = () => {
  if (index < 4) {
    index++;
  } else if (index === 4) {
    index = 0;
  }
  subtitleElement.textContent = posibleTitle[index];
};

const previousWord = () => {
  if (index > 0) {
    index--;
  } else if (index === 0) {
    index = 4;
  }

  subtitleElement.textContent = posibleTitle[index];
};

nextButttonElement.addEventListener('click', nextWord);
previousButtonElement.addEventListener('click', previousWord);

*/

// - Repite el mismo ejercicio pero esta vez desactiva el botón previous si estás en el primer elemento y el botón next si estás en el último

const posibleTitle = ['hola', 'adios', 'gato', 'cosa', 'palabra'];
const subtitleElement = document.getElementById('subtitle');
const previousButtonElement = document.getElementById('previous');
const nextButttonElement = document.getElementById('next');

let index = 0;

const nextWord = () => {
  if (index < posibleTitle.length -1) {
    index++;
    previousButtonElement.disabled = false;
  } else if (index === posibleTitle.length -1) {
    nextButttonElement.disabled = true;
  }
  console.log(index);
  subtitleElement.textContent = posibleTitle[index];
  
};

const previousWord = () => {
  if (index > 0) {
    index--;
    nextButttonElement.disabled = false;
  } else if (index === 0) {
    previousButtonElement.disabled = true;
  }

  subtitleElement.textContent = posibleTitle[index];
};

nextButttonElement.addEventListener('click', nextWord);
previousButtonElement.addEventListener('click', previousWord);

// - Crea un input range con un label, al mover el input range deberá escribir en el label el valor del input range.

const inputElement = document.getElementById('input')
const labelElement = document.getElementById('label')

const printValue = (event) =>{
  labelElement.textContent = event.target.value
}

//inputElement.addEventListener('change', printValue)

// - Crea una lista de 4 checkbox con el texto que quieras y un botón, al pulsar el botón deberá decirte cuantos checkbox están marcados y cual es su texto.


const listElement = document.getElementById('list')

const inputs = document.querySelectorAll('input')

const inputTest = document.getElementById('check1')

const button2Element = document.getElementById('button2')





const helloTest = () =>{
  let count  = 0
  for (const input of inputs){
    if (input.checked){
      count++
      console.log(`Esta casilla está marcada y dice ${input.parentElement.textContent}`)
    }
  }

  console.log('has marcado '+ count + ' casillas')
}


button2Element.addEventListener('click', helloTest)


