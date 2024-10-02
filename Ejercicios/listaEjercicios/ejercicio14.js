let numero = prompt("Escribe un número")

numero = parseInt(numero)



while (numero != +numero) {

    numero = parseInt(prompt("Un número por favor")); 

}

if (numero % 2 == 0){

    alert(numero +" es par");

}

else{

    alert(numero +" es impar");


}