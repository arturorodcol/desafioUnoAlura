//Desafio 1
/* let alertaInicio = "¡Bienvenida y bienvenido a nuestro sitio web!";
alert(alertaInicio); 

let nombre1 = "Luna";
console.log(`Nombre1 es ${nombre1}`);

let edad1 = 25;
console.log(`Edad1 es ${edad1}`);

let numeroDeVentas = 50;
console.log(numeroDeVentas);

let saldoDisponible = 1000;
console.log(saldoDisponible);

alert("¡Error! Completa todos los campos");

let alertaError = "¡Error! Completa todos los campos";
alert(alertaError);

let nombre2 = prompt("Por favor escribe tu nombre");
console.log(`Nombre 2 es ${nombre2}`);

let edad2= prompt("Por favor escribe tu edad");
console.log(`Edad 2 es ${edad2}`); 

let edad3 = prompt("Por favor escribe tu edad");
console.log(`Edad 3 es ${edad3}`)
if ( edad3 >= 18 ) {
    console.log(`¡Puedes obtener tu licencia de conducir!`);
} else {
    console.log(`Aun no puede obtener su licencia`);    
}*/ 

//Desafio 2
/*
let diaSemana = prompt('Por favor ingrese que día de la semana es');
console.log(diaSemana);

if (diaSemana === 'domingo' || diaSemana ===  'sabado') {
    alert('¡Buen fin de semana!');
} else {
    alert('¡Buena semana!');
}

let numeroUsuario = promp-1
-t('Por favor ingrese su número');
console.log(numeroUsuario);

if (numeroUsuario > 0) {
    alert(`Su número es ${numeroUsuario} y es mayor a 0`);
} if (numeroUsuario < 0) {
    alert(`Su número es ${numeroUsuario} y es menor a 0`);
} else {
    alert('Su número es cero');
}

let sistemaPuntuacion = prompt('Por favor ingrese puntos obtenidos');

if (sistemaPuntuacion >= 100) {
    alert(`¡Felicidades, has ganado!`);
} else {
    alert('Intentalo nuevamente para ganar.');
}

let saldo = 1300000;
alert(`El saldo en su cuenta es de $${saldo} COP.` )
console.log()

let nuevoUsuario = prompt('Por favor ingrese su nombre');
alert(`${nuevoUsuario} bienvenido a su cuenta.`); 
*/

//Desafio 3 

/*
//Ejercicio 1
let contadorUno = 1;

while (contadorUno <= 10) {
    console.log(`El número es ${contadorUno}`);
   contadorUno++;
}

//Ejercicio 2
let contadorDos = 10;

while (contadorDos >= 0) {
    console.log(`El número es ${contadorDos}`);
    contadorDos--;
}

//Ejercicio 3 
let numeroMaximo = prompt("Ingrese el número maximo");

while (numeroMaximo >= 0) {
    console.log(numeroMaximo);
    numeroMaximo--;
}

//Ejercicio 4
let numeroMaximoDos = prompt("Ingrese el número hasta donde quiere llegar");
let contador = 0; 

while (contador <= numeroMaximoDos) {
    console.log(contador);
    contador++;
}
*/

// Desafio 4 

console.log('Bienvenido compañeros');

let nombreCuatro = 'Wilson';
console.log(`¡Hola, ${nombreCuatro}!`);

alert(`¡Hola, ${nombreCuatro}!`);

let lenguajeGusta = prompt(`¿Cuál es el lenguaje de programación que más te gusta?`);
console.log(lenguajeGusta);

let valor1 = 7;
let valor2 = 5;

let resultado1 = valor1+valor2;
console.log(`La suma de ${valor1} y ${valor2} es igual a ${resultado1}.`);

let resultado2 = valor1-valor2;
console.log(`La resta de ${valor1} y ${valor2} es igual a ${resultado2}.`);

let ingreseEdad = prompt(`Por favor ingrese su edad`);
console.log(ingreseEdad);

if(ingreseEdad >= 18) {
    console.log(`Es mayor de edad`);
} else {
    console.log(`Es menor de edad`);
}

let numero = parseInt(prompt(`Ingrese un número entero`));
if (numero > 0) {
    console.log(`El número ${numero} es positivo`);
} else if (numero < 0) {
    console.log(`El número ${numero} es negativo`);
} else {
    console.log(`El número "${numero}" es cero`);
}

let numeroMaximo = 10;
let contadorNumeromaximo = 1; 

while (contadorNumeromaximo <= numeroMaximo) {
    console.log(contadorNumeromaximo);
    contadorNumeromaximo++; 
}

let nota = 8; 
console.log(`La nota es ${nota}`);
if (nota >= 7) {
    console.log(`La nota es: ${nota}, aprobado`);
} else {
    console.log(`La nota es: ${nota}, reprobado`);
}

let numero11 = Math.floor(Math.random());
console.log(numero11);

let numero12 = Math.floor(Math.random()*10)+1;
console.log(numero12);

let numero13 = Math.floor(Math.random()*1000)+1;
console.log(numero13);