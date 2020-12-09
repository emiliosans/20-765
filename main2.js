//otra forma de cargar solo una funcion
window.onload = preparaBoton;

//para cargar todas las funciones cuando cargue la pagina
window.onload = function () {
    preparaBoton();
}
/*NO FUNCIONA document.getElementById('boton').addEventListener('click',function ()
{
    window.alert("holi");
}  */
const MAYORIA_EDAD = 18;

function preparaBoton() {
    document.getElementById('boton').onclick = function () {
        informarMayorEdad();
    }
}

function informaMayorEdad() {
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