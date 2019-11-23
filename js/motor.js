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
    // document.getElementById("secD").style.display = "none";

    document.getElementById("spinner").style.display = "block";

    setTimeout(function() {
        document.getElementById("spinner").style.display = "none";
    }, 2450);

}


const calcularSeguro = document.getElementById('calcular').addEventListener('click', function(e) {
    e.preventDefault();
    yoQueSe();

    // Marca del coche
    var car = document.getElementById("car");
    var strUser = car.options[car.selectedIndex].text;

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
        var tipoSeguro = document.getElementById('cusR1').textContent;

    } else if (document.getElementById('customRadio2').checked) {
        // Completo
        var tipo = precio * seguroCompleto;
        var tipoSeguro = document.getElementById('cusR2').textContent;
    }

    ///// DESCUENTO DEPENDIENDO DEL AÑO /////
    var dY = document.getElementById("year");
    let descuentoYear = (dY.options[dY.selectedIndex].value) * 0.3;
    /////

    // Llamo a la funcion calculos pasandole parametros  Para pintar en el HTML
    calculos(strUser, str, descuentoYear, tipo, marca, tipoSeguro);
});


function calculos(c, y, d, t, m, ts) {

    // document.getElementById("secD").style.display = "block";

    setTimeout(function() {

        // variables
        let precioFinal = precio + (((t) + (m)) - (d));

        let secD = document.getElementById("secD");
        secD.innerHTML += `<div class="div1">
                        <div class="coche"></div>
                        <div class="texto">
                            <p class="demo"></p>
                        </div>
                    </div>`;

        if (c === "Audi") {

            const modelo = document.getElementsByClassName("coche")[0];
            var foto = document.createElement('img');
            foto.src = 'img/audi.png';
            foto.setAttribute("class", "imgCoche");
            foto.width = 400;
            modelo.appendChild(foto);

            // pinto texto
            const txt = document.getElementsByClassName("demo")[0];
            txt.innerHTML = "<span class='txtDesc'>Descripcion<br>del Seguro</span>" + "<br>" + "Marca: " + c + "<br>" + "Año: " + y + "<br>" + "Tipo seguro: " + ts + "<br>" + "Total: " + precioFinal + "€";


        } else if (c === "Seat") {

            const modelo = document.getElementsByClassName("coche")[0];
            var foto = document.createElement('img');
            foto.src = 'img/seat.png';
            foto.setAttribute("class", "imgCocheSeat");
            foto.width = 400;
            modelo.appendChild(foto);

            // pinto texto
            const txt = document.getElementsByClassName("demo")[1];
            txt.innerHTML = "<span class='txtDesc'>Descripcion<br>del Seguro</span>" + "<br>" + "Marca: " + c + "<br>" + "Año: " + y + "<br>" + "Tipo seguro: " + ts + "<br>" + "Total: " + precioFinal + "€";


        } else {

            const modelo = document.getElementsByClassName("coche")[0];
            var foto = document.createElement('img');
            foto.src = 'img/golf.png';
            foto.setAttribute("class", "imgCocheGolf");
            foto.width = 400;
            modelo.appendChild(foto);

            // pinto texto
            const txt = document.getElementsByClassName("demo")[2];
            txt.innerHTML = "<span class='txtDesc'>Descripcion<br>del Seguro</span>" + "<br>" + "Marca: " + c + "<br>" + "Año: " + y + "<br>" + "Tipo seguro: " + ts + "<br>" + "Total: " + precioFinal + "€";


        }
    }, 2500);
}

const printPDF = document.getElementById('printPDF').addEventListener('click', function() {
    // alert('hola');
});