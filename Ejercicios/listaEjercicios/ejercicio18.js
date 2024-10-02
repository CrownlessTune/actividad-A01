let numero = prompt("Escribe un número entero para sumar sus dígitos");
let sumarNumero = 0


numero = parseInt(numero)


while (!Number.isInteger(numero)) {
    numero = parseInt(prompt("Por favor, introduce un número entero válido"));
}

numero = numero.toString();

// Sumamos los dígitos
for (let i = 0; i < numero.length; i++) {
    sumarNumero += parseInt(numero[i]); 
}

alert(`La suma de los dígitos es sumarNumero: ${sumarNumero}`);
