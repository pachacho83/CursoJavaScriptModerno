/* Tipos de datos primitivos 
no es un objeto y son inmutables.

Boolean
Null
Undefined
Number
String
Symbol
*/

//Palabras Reservadas

let _objeto$123 = 123;
let precio99_99 = 123;

let jugadorConPuntajeMasAlto = 'Fernando';

class JuegoAnio {

}

//Primitivos

let nombre = 'Peter Parker';
console.log( nombre );

nombre = 'Ben Parker';
console.log( nombre );

nombre = "Tía May";
nombre = `Tía May`;

console.log( typeof nombre );

nombre = 123;
console.log( typeof nombre );


let esMarvel = false;
console.log( typeof esMarvel );


let edad = 33;
console.log( typeof edad );

edad = 33.001;
console.log( typeof edad );


let superPoder;
console.log( typeof superPoder ); // ???

let soyNull = null;
console.log( typeof soyNull ); // ???


let symbol1 = Symbol('a');
let symbol2 = Symbol('a');

console.log( typeof symbol1 );


console.log( symbol1 === symbol2 );

//Arreglos

// const arr = new Array(10);
// const arr = [];
// console.log(arr);

let videoJuegos = [ 'Mario 3', 'Megaman', 'Chrono Trigger' ];
console.log({ videoJuegos });

console.log( videoJuegos[0] );

let arregloCosas = [
    true,
    123,
    'Fernando',
    1 + 2,
    function(){},
    ()=>{},
    { a: 1 },
    ['X', 'Megaman', 'Zero', 'Dr. Light', [
        'Dr. Willy',
        'Woodman'
    ]]
];

// console.log({ arregloCosas });
// console.log( arregloCosas[2] );
console.log( arregloCosas[7][4][1] );

let juegos = ['Zelda', 'Mario', 'Metroid', 'Chrono'];
console.log('Largo:', juegos.length );

let primero = juegos[ 2 - 2 ];
let ultimo  = juegos[ juegos.length - 1 ];

console.log({ primero, ultimo });

juegos.forEach( (elemento, indice, arr) => {
    console.log({ elemento, indice, arr });
});

let nuevaLongitud = juegos.push( 'F-Zero' );
console.log({ nuevaLongitud, juegos });

nuevaLongitud = juegos.unshift('Fire Emblem');
console.log({ nuevaLongitud, juegos });

let juegoBorrado = juegos.pop();
console.log({ juegoBorrado, juegos });


let pos = 1;

console.log( juegos );
let juegosBorrados = juegos.splice( pos, 2);
console.log({ juegosBorrados, juegos });


let metroidIndex = juegos.indexOf('Metroid'); // CaSeSeNsItIvE
console.log({ metroidIndex });

//Objeto literal

const personaje = {
  nombre: 'Tony Stark',
  codeName: 'Ironman',
  vivo: false,
  edad: 40,
  coords: {
      lat: 34.034,
      lng: -118.70
  },
  trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
  direccion: {
      zip: '10880, 90265',
      ubicacion: 'Malibu, California',
  },
  'ultima-pelicula': 'Infinity War'
};

console.log( personaje );
console.log('Nombre', personaje.nombre );
console.log('Nombre', personaje['nombre'] );
console.log('Edad', personaje.edad );

console.log('Coors', personaje.coords );
console.log('Lat', personaje.coords.lat );

console.log('No. Trajes', personaje.trajes.length );
console.log('último traje', personaje.trajes[ personaje.trajes.length - 1 ] );

const x = 'vivo';
console.log('Vivo', personaje[x] );

console.log('Última película', personaje['ultima-pelicula'] );

// Más detalles

delete personaje.edad;
console.log( personaje );

personaje.casado =  true;


const entriesPares = Object.entries( personaje );
console.log( entriesPares );

// personaje = true;

Object.freeze( personaje );

personaje.dinero = 10000000000;
personaje.casado = false;
personaje.direccion.ubicacion = 'Costa Rica';
console.log( personaje );


const propiedades = Object.getOwnPropertyNames( personaje );
const valores     = Object.values( personaje );
console.log({ propiedades, valores });


//Funciones


function saludar( nombre ) {
  // console.log( arguments );
  // console.log('Hola ' + nombre );
  return [1,2];

  // Esto nunca se va a ejecutar
  console.log('Soy un código que está después del return');
}

const saludar2 = function( nombre ) {
  console.log('Hola ' + nombre );
}

const saludarFlecha = () => {
  console.log('Hola Flecha');
}

const saludarFlecha2 = ( nombre ) => {
  console.log('Hola ' + nombre );
}



const retornoDeSaludar = saludar( 'Fernando', 40, true, 'Costa Rica' ); // 1

// saludar2( 'Fernando' );

// saludarFlecha();
// saludarFlecha2('Melissa');

function sumar( a, b ) {
  return a + b;
}

// const sumar2 = (a,b) => {
//     return a + b;
// }
const sumar2 = (a,b) => a + b;

function getAleatorio() {
  return Math.random();
}

// En una función de flecha, que no tenga llaves { }
// getAleatorio2()
const getAleatorio2 = () => Math.random();


console.log(  getAleatorio2()   );

//protip-retorno


// function crearPersona( nombre, apellido ) {
//     return { nombre,apellido }
// }
const crearPersona = ( nombre, apellido ) => ({ nombre,apellido });



const persona = crearPersona( 'Fernando', 'Herrera' );
console.log( persona );


function imprimeArgumentos() {
    console.log( arguments );
}

const imprimeArgumentos2 = ( edad, ...args ) => {
    // console.log({ edad, args });
    return args;
}

const [ casado, vivo, nombre, saludo ] = imprimeArgumentos2(10, true, false, 'Fernando', 'Hola');
console.log({ casado, vivo, nombre, saludo });


const { apellido: nuevoApellido } = crearPersona( 'Fernando', 'Herrera' );
console.log({ nuevoApellido });


const tony = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
};

// const imprimePropiedades = ( personaje ) => {

//     console.log( 'nombre',personaje.nombre );
//     console.log( 'codeName',personaje.codeName );
//     console.log( 'vivo',personaje.vivo );
//     console.log( 'edad',personaje.edad );
//     console.log( 'trajes',personaje.trajes );

// }
const imprimePropiedades = ({ nombre, codeName, vivo, edad = 15, trajes }) => {

    console.log({nombre});
    console.log({codeName});
    console.log({vivo});
    console.log({edad});
    console.log({trajes});
}

imprimePropiedades( tony );