
// lectura de teclado para el código
let numero = prompt("Escribe un número")


//  esto para convertir el string en número
Number(numero)


// bucle while que no termina hasta que escribas un número, de cualquier tipo
while (numero != +numero) {

    numero = parseInt(prompt("Eso no es un numero, repite"));

    //  esto para convertir el string en número
    Number(numero)



}

// y si escribes un número válido, termina el while y se muestra

alert(`${numero} es un número`)