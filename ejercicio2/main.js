window.onload = function () {
    preparaLetra();
    preparaLetraNIE();
   // devuelveLetraEnUnDiv();
}

function preparaLetra() {
    document.getElementById('botonDNI').onclick = function () {
        calculaLetra();
    }
}

function preparaLetraNIE() {
    document.getElementById('botonNIE').onclick = function () {
        calculaLetraNIE();
    }
}

function calculaLetra() {
    let dni = " ";
    dni = document.getElementById('dni').value;
    //window.alert("La letra de tu DNI es la " + devuelveLetra(dni));
    //devuelveLetraEnUnDiv(dni);
}

function calculaLetraNIE() {
    let nie = " ";
    nie = document.getElementById('nie').value;
    //let letra = dni % 23;
    let digitoControl = nie.charAt(0);
    //window.alert ("El digito de control es " + digitoControl);
    switch (digitoControl) {
        case 'X':
            digitoControl = '0';
            break;
        case 'Y':
            digitoControl = '1';
            break;
        case 'Z':
            digitoControl = '2';
            break;
    }
    nie = nie.substr(1);
    // window.alert ("el nie sin la letra es " + nie);
    nie = digitoControl + nie;
    // window.alert ("el nie con el digito de control cambiado a numero es " + nie);
    window.alert("La letra de tu NIE es la " + devuelveLetra(nie));
    //devuelveLetraEnUnDiv(nie);
}

function devuelveLetra(documento) {
    let letra = " ";
    switch (documento % 23) {
        case 0:
            letra = 'T';
            break;
        case 1:
            letra = 'R';
            break;
        case 2:
            letra = 'W';
            break;
        case 3:
            letra = 'A';
            break;
        case 4:
            letra = 'G';
            break;
        case 5:
            letra = 'M';
            break;
        case 6:
            letra = 'Y';
            break;
        case 7:
            letra = 'F';
            break;
        case 8:
            letra = 'P';
            break;
        case 9:
            letra = 'D';
            break;
        case 10:
            letra = 'X';
            break;
        case 11:
            letra = 'B';
            break;
        case 12:
            letra = 'N';
            break;
        case 13:
            letra = 'J';
            break;
        case 14:
            letra = 'Z';
            break;
        case 15:
            letra = 'S';
            break;
        case 16:
            letra = 'Q';
            break;
        case 17:
            letra = 'V';
            break;
        case 18:
            letra = 'H';
            break;
        case 19:
            letra = 'L';
            break;
        case 20:
            letra = 'C';
            break;
        case 21:
            letra = 'K';
            break;
        case 22:
            letra = 'E';
            break;
    }
    return letra;
}

/*let letras = ["T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E"];
for each  (var item in letras) {

}*/

/*function devuelveLetraEnUnDiv(documento) {
    //CREAR NUEVO ELEMENTO PARA AÑADIRLO AL HTML
    var nuevo_div = document.createElement('div');
    nuevo_div.innerHTML = "Tu letra es " + documento;
    //AHORA SE AÑADE AL HTML
    var id_formulario = document.getElementById("formulario");
    id_formulario.appendChild(nuevo_div);
}*/

//CREAR NUEVO ELEMENTO PARA AÑADIRLO AL HTML
var nuevo_div = document.createElement('div');
nuevo_div.innerHTML = "Tu letra es ";
//AHORA SE AÑADE AL HTML
var id_formulario = document.getElementById("formulario");
id_formulario.appendChild(nuevo_div);
