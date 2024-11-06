//EJERCICIOS TYPESCRIPT

// Ejercicio 1
// Declarar una variable de tipo string llamada "nombre" y asignarle tu nombre.
// Declarar una variable de tipo number llamada "edad" y asignarle tu edad.
// Declarar una variable de tipo boolean llamada "esEstudiante" y asignarle true o false.
// Imprimir en consola el valor de cada variable usando console.log()
let nombre: string = "Celeste Astarito";
let edad: number = 32;
let esEstudiante: boolean = true;

console.log("Nombre:", nombre);
console.log("Edad:", edad);
console.log("Es estudiante:", esEstudiante);


// Ejercicio 2
// Declarar una función que reciba dos números como parámetros y retorne su suma.
// Asegurar que los parámetros y el valor de retorno sean de tipo number.
// Llamar a la función e imprimir el resultado.
function sumar(a: number, b: number): number {
return a+b;
}
console.log("suma:" , sumar(7,6));


// Realizar otra función que reste dos números.
function restar(a: number, b: number): number {
    return a-b;
    }
    console.log("resta:" , restar(7,3));


// Realizar otra función que multiplique dos números.
function multiplicar(a: number, b: number): number {
    return a*b;
    }
    console.log("multiplicación:" , restar(7,3));


// Ejercicio 3
// Crear un array de números llamado "numeros" y agregar algunos valores.
// Usa un bucle para imprimir cada número multiplicado por 2 (usando forEach())
let numeros: number[] = [1, 2, 3, 4, 5,];
    numeros.forEach(num =>{
    console.log (num*2);
});


// Ejercicio 4
// Declarar una interfaz "Persona" con las propiedades: nombre (string), edad (number), y esEstudiante (boolean).
// Crear tres objetos que sigan la estructura de la interfaz.
// Imprimir en consola.
interface Persona{
    nombre:string;
    edad:number;
    esEstudiante:boolean;
}
let persona1: Persona = {
    nombre: "Estefania",
    edad:20,
    esEstudiante: true
}

let persona2: Persona = {
    nombre: "Erica",
    edad:31,
    esEstudiante: true
}

let persona3: Persona = {
    nombre: "José",
    edad:38,
    esEstudiante: true
}

console.log("Persona1: ",persona1);
console.log("Persona2: ",persona2);
console.log("Persona3: ",persona3);


// Ejercicio 5
// Declara una variable que pueda ser de tipo string o number.
// Asigna un valor string y luego cambia su valor a number.
// Imprimir en consola ambos casos.
let valor: string|number;
valor = "Celeste Johanna";
console.log(valor);

valor = 126;
console.log(valor);


// Ejercicio 6
// Definir una interfaz "Producto" con propiedades: nombre (string), precio (number), y enStock (boolean).
// Crear un array de "productos" con seis objetos que sigan la interfaz.
// Crear una función que reciba el array y retorne los productos en stock (sólo en stock). 
// Crear otra función que reciba el array y retorne los productos sin stock (sólo sin stock). 
// Se puede usar método filter() para esto.
interface Producto{
    nombre:string;
    precio:number;
    enStock:boolean;
    }
    let productos:Producto[] = [
        {nombre: "Coca-Cola", precio:10, enStock: true},
        {nombre: "Pepsi", precio:12, enStock: false},
        {nombre: "Sprite", precio:8, enStock: true},
        {nombre: "Fanta", precio:9, enStock: false},
        {nombre: "Sevenup" , precio:15, enStock:true},
        {nombre: "Mirinda" , precio:18, enStock:true},
    ]
    function productoEnStock(productos: Producto[]): Producto[] {
        return productos.filter(producto => producto.enStock);
      }

      function productoSinStock(productos: Producto[]): Producto[] {
        return productos.filter(producto => !producto.enStock);
      }
      console.log("Productos en stock:", productoEnStock(productos));
console.log("Productos sin stock:", productoSinStock(productos));
    

// Ejercicio 7
// Definir una interfaz "Cliente" con 4 propiedades a elección (por ahora solamente tipos string, booleanos y numbers).
// Crear un array de "clientes" con seis objetos que sigan la interfaz.
// Crear una función que reciba el array y retorne los clientes que cumplan una condición (segun el booleano que hayamos creado). 
// Crear otra función que reciba el array y retorne los clientes que cumplan la condición inversa al punto de arriba (mismo booleano que hayamos elegido). 
// Se puede usar método filter() para esto.
interface Cliente{
    nombre:string;
    edad:number;
    tieneTarjeta:boolean;
    tieneCuenta:boolean;
}
let cliente: Cliente[] =[
{
    nombre: "Juan",
    edad: 25,
    tieneTarjeta: true,
    tieneCuenta: true
},

{
    nombre: "Ana",
    edad: 35,
    tieneTarjeta: false,
    tieneCuenta: true
},
{
    nombre: "Roxana",
    edad: 45,
    tieneTarjeta: true,
    tieneCuenta: true
},
{
    nombre: "Eva",
    edad: 50,
    tieneTarjeta: true,
    tieneCuenta: true
},
{
    nombre: "Matias",
    edad: 26,
    tieneTarjeta: true,
    tieneCuenta: true
},
]
function clienteConTarjeta(clientes: Cliente[]):Cliente []{
return clientes.filter(cliente => cliente.tieneTarjeta);
}
function clienteSinTarjeta(clientes: Cliente[]):Cliente []{
    return clientes.filter(cliente => !cliente.tieneTarjeta);
    }
    console.log("Posee Tarjeta:", clienteConTarjeta(cliente));
    console.log("No Posee Tarjeta:", clienteSinTarjeta(cliente));