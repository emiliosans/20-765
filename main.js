//window.alert("hola desde main");
console.log("cargando el archivo main");
//TODO
/*
Hacer una página web que permita introducir la edad al usuario 
y le informe si es o no mayor de edad.

1. parte estatica: definir html (css opcional)
2. parte dinamica: js
*/
//const button = document.querySelector('button');

const MAYORIA_EDAD = 18;
function informarMayorEdad() {
    //button.onclick = function () {
    let edad = 0;
    edad = document.getElementById('edad').value;
    if (edad < MAYORIA_EDAD) {
        window.alert("Eres MENOR de edad");
        console.log("Eres MENOR de edad");

    } else if (edad > MAYORIA_EDAD) {
        window.alert("Eres MAYOR de edad");
        console.log("Eres MAYOR de edad");
    }

}



