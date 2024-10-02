
let texto = prompt("Introduce una frase para verificar si es un palíndromo:").toLowerCase();


texto = texto.replace(" ", "");



let esPalindromo = texto.split("").reverse().join("");


if (esPalindromo) {
    alert("Es un palíndromo.");
} else {
    alert("No es un palíndromo.");
}
