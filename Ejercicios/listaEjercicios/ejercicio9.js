let edad = prompt("Escribe tu edad")

edad = parseInt(edad)



while (Number.isInteger(edad) && edad >= 0) {

    edad = parseInt(prompt("Edad no válida, repite"));

    edad = parseInt(edad)

}

let pais = prompt("Escribe tu nacionalidad").toLowerCase

if (pais === "españa" && edad >= 18){

    alert("Puedes votar")
}

else{

    alert("No puedes votar")
}