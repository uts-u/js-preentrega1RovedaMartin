do {
let dineroDonado = prompt("Cuanto quiere donar?");
if (dineroDonado > 0 && dineroDonado< 999999){
if(dineroDonado < 5000) {
    alert ("Gracias por su aporte");
}
else if (dineroDonado < 10000){
    alert ("Muchas gracias por su significativo aporte, sin usted el proyecto no sería igual");
}
else if (dineroDonado < 50000){
    alert ("Muchas gracias por su significativo aporte, revise en su correo electronico, pronto se le enviariá una invitación para participar de un encuentro presencial con otros contribuyentes destacados");
    }
else
alert ("Muchas gracias, pero por cuestiones fiscales no podemos aceptar esa suma de dinero de un solo contribuyente")
}
} while (dineroDonado = Number);