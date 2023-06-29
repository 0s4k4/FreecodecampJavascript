// var a = 7;
// var b;

// b = a;


var myNombre = 'Jorge Luis';
var myLastName = 'Piña Florencio';
//alert(myNombre+' '+myLastName);


///Inicializacion de variables

///laa variables tienen un valor por defecto de undefined y si se hacen operaciones con variables asi, da un error de NaN
// Cambia solo el código debajo de esta línea
var a;
var b;
var c;
// Cambia solo el código encima de esta línea

// console.log(a = a + 1);
// console.log(b = b + 5);
// console.log(c = c + " String!");
///tipos de variables
/*
let nos permite declarar una variable
const nos permite declarar una variable constante, que se declara pero solo funciona como de solo lectura
las cons por lo general se ponen en mayusculas para dinstingirlas
*/
const FAV_PET = "Cats";

//console.log(FAV_PET)


///NUMBER EN JAVASCRIPT  


alert('operaciones en javascript');
let numero = prompt('introduce el numero');
let numero2 = prompt('introduce el segundo numero');
let resultado = parseInt(numero) + parseInt(numero2);
let resta = parseInt(numero) - parseInt(numero2);
let multiplicacion = parseInt(numero) * parseInt(numero2);

let division = parseInt(numero) / parseInt(numero2);
alert('el resultado de la suma es de '+resultado);
alert('el resultado de la resta es de '+resta);
alert('El resultado de la multiplicacion es de '+ multiplicacion);
alert('el resultado de la divison es de '+division);