
window.onload = function () {
    preparaResultado();
}

function preparaResultado() {
    document.getElementById('boton').onclick = function () {
        let peso = document.getElementById("peso").value;
        let altura = document.getElementById("estatura").value;
        //let imc = calculaIMC(peso,altura);
        muestraIMC(calculaIMC(peso,altura));
    }
}



function calculaIMC (kg, metros) {
    //let estatura = Math.pow(metros,2);
    let imc = (kg / (Math.pow(metros,2)))*10000;
    //window.alert("el IMC es " + imc);
    return imc;
}
/**
 * 
 * Función que muestra el valor nominal
 * y la imagen correspondiente al imc recibido
 * 
 * @param {*} imc el valor real de indice de masa corporal
 * 
 */
function muestraIMC (imc) {
    let resultado = resultadoIMC(imc);
    if (document.querySelector('div')) {
        document.querySelector('div').innerHTML = "Tu IMC es " + resultado;
        document.querySelector('img').setAttribute('src', resultado + '.png');

        
    }
    else {
          //CREAR UN NUEVO ELEMENTO
          var nuevo_elemento_div = document.createElement("div");
          nuevo_elemento_div.innerHTML="Tu IMC es " + resultado;
          
          var nuevo_elemento_img = document.createElement("img");
          nuevo_elemento_img.setAttribute('src', resultado + '.png');
          
          //tambien se puede hacer asi:
          //nuevo_elemento_img.src = "./img.jpeg";

          //Y AÑADIRLO AL HTML
          let etiqueta_body = document.getElementById("cuerpo");
          etiqueta_body.appendChild(nuevo_elemento_div);

          etiqueta_body.appendChild(nuevo_elemento_img);
    }
}

function resultadoIMC (imc) {
    let estado = ' ';
    if (imc < 16){
            estado = "DESNUTRIDO";
    }
        else if (imc >= 16 && imc < 18) {
            estado = "DELGADO";
        }
        else if (imc >= 18 && imc < 25) {
            estado = "IDEAL";
        }
        else if (imc >= 25 && imc < 31) {
            estado = "SOBREPESO";
        }
        else if (imc >= 31) {
            estado = "OBESO";
        }
    
        //window.alert("el RESULTADO del imc es " + estado);

    return estado;
}