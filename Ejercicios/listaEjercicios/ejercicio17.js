let edad 

edad = parseInt(edad)

var contadorEdad = 0

var contador







while (contador != 5){

    edad = parseInt(prompt("Escribe tu edad"));


    while (Number.isInteger(edad) && edad >= 0) {

        edad = parseInt(prompt("Edad no válida, repite"));
    
        edad = parseInt(edad)
    
    }


if (edad >= 18){

        contadorEdad +=1

}

    contador +=1
}