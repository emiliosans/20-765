
const LETRAS_DNI = "TRWAGMYFPDXBNJZSQVHLCKE";

//tip para hacer funciones, escribir primero lo q recibe la funcion y lo q va a devolver
function preparaNumero (letra, numero) {
    let dni_num = 0;

    dni_num = letra + numero;

    return dni_num;
}


function calcularLetraDni ()
{
    console.log ("Ha introducido un dni");
    //tenemos que obtener el dni introducido
    var dni = document.getElementById("dni").value;
    console.log ("Ha introducido " + dni);


    //para recoger el elemento de un radiobutton del html
    let elementoSeleccionado = document.querySelector('[name="prefijo"]:checked');
    console.log("letra = " + elementoSeleccionado.value);
    let dniFinal = preparaNumero(elementoSeleccionado.value,dni);

    var resto = (dni % 23);
    console.log ("Resto " + resto);
    let letradni = LETRAS_DNI.charAt(resto);
    console.log ("Tu letra es " + letradni);

    //mirar si existe un elemento del HTML y eliminarlo
    /*forma de hacerlo 1 (poco eficiente)
    if (document.querySelector("div")){
        //window.alert("existe un div");
        document.body.removeChild(document.querySelector("div"));
    }*/
    document.body.removeChild(document.querySelector("div"));
    //Forma de hacerlo 2, mas eficiente xq no estas creando y destruyendo el elemento
    if (document.querySelector("div")){
        document.querySelector("div").innerHTML="Tu letra es " + letradni;
    } else {
         //CREAR UN NUEVO ELEMENTO
         var nuevo_elemento_div = document.createElement("div");
        nuevo_elemento_div.innerHTML="Tu letra es " + letradni;
        //Y AÑADIRLO AL HTML
        let etiqueta_body = document.getElementById("cuerpo");
        etiqueta_body.appendChild(nuevo_elemento_div);
    }

    /*
    //CREAR UN NUEVO ELEMENTO
    var nuevo_elemento_div = document.createElement("div");
    nuevo_elemento_div.innerHTML="Tu letra es " + letradni;
    //Y AÑADIRLO AL HTML
    var etiqueta_body = document.getElementById("cuerpo");
    etiqueta_body.appendChild(nuevo_elemento_div);
   
*/
}

// console.log ("Ha introducido " + dni);//AMBITO
// console.log ("Ha introducido " + LETRAS_DNI);