// Ejercicio 13: Control de Errores en Entrada de Datos
// Escribe un script que pida al usuario un número y verifique si la entrada es realmente un número. 
// Si no lo es, muestra un mensaje de error y vuelve a pedir la entrada. 
// Repite hasta que el usuario introduzca un número válido.
// Objetivos: Controlar y validar la entrada del usuario.



let numero = prompt("Escribe un número")





while (numero != +numero) {

    numero = parseInt(prompt("Eso no es un numero, repite"));

    Number(numero)



}

alert(`${numero} es un número`)
