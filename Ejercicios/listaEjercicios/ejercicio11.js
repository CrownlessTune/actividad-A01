let numero = prompt("Escribe un número entero negativo")

numero = parseInt(numero)



while (Number.isInteger(numero) && numero < 0) {

    numero = parseInt(prompt("numero no entero ni negativo, repite"));

    numero = parseInt(numero)



}

console.log("Ya por fin un numero negativo")