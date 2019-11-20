// Quitamos todos los parametros de la URL
window.history.pushState("object or string", "Title", "/" + window.location.href.substring(window.location.href.lastIndexOf('/') + 1).split("?")[0]);


// Obtengo la fecha actual con la funcion Date()
let d = new Date();
let n = d.getFullYear();
const c = n - 20;

let cont = 0;

for (n; n >= c; n--) {
    let year = document.getElementById("year");
    let opt = document.createElement('option');
    opt.value = cont++;
    opt.innerHTML = n;
    year.appendChild(opt);
}

// Defino las variables constantes del precio base en 600
const precio = 600;
const incrementoMarcaAudi = 0.3;
const incrementoMarcaVolkswagen = 0.2;
const incrementoMarcaSeat = 0.1;
const seguroBasico = 0.3;
const seguroCompleto = 0.5;


function yoQueSe() {
    document.getElementById("spinner").style.display = "block";
}


function myFunction() {

    yoQueSe();
    // setInterval(yoQueSe, 1000);

    // Marca del coche
    var e = document.getElementById("car");
    var strUser = e.options[e.selectedIndex].text;

    // Año del coche
    var y = document.getElementById("year");
    var str = y.options[y.selectedIndex].text;

    switch (strUser) {
        case "Audi":
            var marca = precio * incrementoMarcaAudi;
            break;
        case "Seat":
            var marca = precio * incrementoMarcaSeat;
            break;
        case "Volkswagen":
            var marca = precio * incrementoMarcaVolkswagen;
            break;
    }

    if (document.getElementById('customRadio1').checked) {
        // Basico 
        var tipo = precio * seguroBasico;

    } else if (document.getElementById('customRadio2').checked) {
        // Completo
        var tipo = precio * seguroCompleto;

    }

    ///// DESCUENTO DEPENDIENDO DEL AÑO /////
    var dY = document.getElementById("year");
    let descuentoYear = (dY.options[dY.selectedIndex].value) * 0.3;
    /////


    // Llamo a la funcion calculos pasandole parametros  Para pintar en el HTML
    calculos(strUser, str, descuentoYear, tipo, marca);
}

function calculos(c, y, d, t, m) {

    setTimeout(function() {

        if (c === "Audi") {
            const modelo = document.getElementById("coche");
            var foto = document.createElement('img');
            foto.src = 'img/audi.png';
            foto.setAttribute("class", "imgCoche");
            foto.width = 400;
            modelo.appendChild(foto);
        } else if (c === "Seat") {
            const modelo = document.getElementById("coche");
            var foto = document.createElement('img');
            foto.src = 'img/seat.png';
            foto.width = 400;
            modelo.appendChild(foto);
        } else {
            const modelo = document.getElementById("coche");
            var foto = document.createElement('img');
            foto.src = 'img/golf.png';
            foto.width = 400;
            modelo.appendChild(foto);
        }

        document.getElementById("spinner").style.display = "none";
        document.getElementById("div1").style.display = "block";

        // variables
        let secD = document.getElementById("demo");
        let precioFinal = precio + (((t) + (m)) - (d));

        // pinto
        secD.innerHTML = c + " " + y + " " + precioFinal + "€";
    }, 2500);

}