
let n = parseInt(prompt("Introduce un número entero:"));


let t = 1;

while (n > 0) {

    t = t * n;

    n -= 1;
}


alert("El resultado es: " + t);
