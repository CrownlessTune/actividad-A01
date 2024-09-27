let numero = prompt("Escribe un número")

numero = parseInt(numero)



while (numero != +numero) {

    numero = parseInt(prompt("Un número por favor")); 

}

alert((numero>0) ? `${numero} es positivo` : (numero < 0) ?`${numero} es negativo` : `${numero} es cero`)