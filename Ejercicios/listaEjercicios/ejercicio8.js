let edad = prompt("Escribe tu edad")

edad = parseInt(edad)



while (Number.isInteger(edad) && edad >= 0) {

    edad = parseInt(prompt("Edad no válida, repite"));

    edad = parseInt(edad)

}


if (edad < 18){

    alert("Eres menor de edad");

}

else if (edad >= 18 && edad <= 25){

    alert("Eres mayor que 18 pero menor de 25");

}

else{

    alert("Eres mayor de 25")

}