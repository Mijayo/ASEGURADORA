// Quitamos todos los parametros de la URL
window.history.pushState("object or string", "Title", "/" + window.location.href.substring(window.location.href.lastIndexOf('/') + 1).split("?")[0]);
// localStorage.clear();

// Obtengo la fecha actual del sistema con la funcion Date()
let d = new Date();
let n = d.getFullYear();
// La herramienta calcula seguros de hasta 20 años de antiguedad
const c = n - 20;
// Inicializo el contador en cero para luego asignarlo al valor del año
let cont = 0;
// Recorro el for de manera inversa para asi imprimir el 2019 hasta 1999
for (n; n >= c; n--) {
    // variable year selecciono el select del HTML
    let year = document.getElementById("year");
    // creo el tag <option>
    let opt = document.createElement('option');
    // value = cont++
    opt.value = cont++;
    // lo pinto como HTML
    opt.innerHTML = n;
    // Hago un appendChild para pintar los 20 option
    year.appendChild(opt);
}

// Defino las constantes que posteriormente usare en los calculos
const precio = 600;
const incrementoMarcaAudi = 0.3;
const incrementoMarcaVolkswagen = 0.2;
const incrementoMarcaSeat = 0.1;
const seguroBasico = 0.3;
const seguroCompleto = 0.5;


// Funcion para mostrar el spinner a la hora de realizar el calculo del seguro
function spinner() {
    // Muestro el spinner ya que de base esta oculto
    document.getElementById("spinner").style.display = "block";
    // Uso setTimeout() para que el spinner se muestre durante 2450 milisegundos
    setTimeout(function() {
        // spinner a none
        document.getElementById("spinner").style.display = "none";
        // muestro el div de la seccion derecha
        document.getElementById("secD").style.display = "block";
    }, 2450);
}


const calcularSeguro = document.getElementById('calcular').addEventListener('click', function(e) {
    // Cancela la acción o respuesta por defecto que implica hacer click en el enlace, es decir, que el navegador te lleve hacia ese enlace.
    e.preventDefault();

    // Ejecuto la funcion del spinner
    spinner();

    // Oculto la seccion de la derecha
    document.getElementById("secD").style.display = "none";

    // Obtengo la marca del coche
    var car = document.getElementById("car");
    var strUser = car.options[car.selectedIndex].text;

    // Obtengo el año del coche
    var y = document.getElementById("year");
    var str = y.options[y.selectedIndex].text;

    // Hago un switch para saber que marca de coche se selecciono
    switch (strUser) {
        case "Audi":
            // Calculo el incremento del precio base por el plus de marca AUDI = 0.3
            var marca = precio * incrementoMarcaAudi;
            break;
        case "Seat":
            // Calculo el incremento del precio base por el plus de marca SEAT = 0.1
            var marca = precio * incrementoMarcaSeat;
            break;
        case "Volkswagen":
            // Calculo el incremento del precio base por el plus de marca WW = 0.2
            var marca = precio * incrementoMarcaVolkswagen;
            break;
    }

    // Controlo para saber que tipo de seguro esta seleccionado
    if (document.getElementById('customRadio1').checked) {
        // Basico incremento del 0.3
        var tipo = precio * seguroBasico;
        // Guardo el valor del txt para pasarlo como parametro al objeto que guardo en el localStorage
        var tipoSeguro = document.getElementById('cusR1').textContent;

    } else if (document.getElementById('customRadio2').checked) {
        // Completo incremento del 0.5
        var tipo = precio * seguroCompleto;
        // Guardo el valor del txt para pasarlo como parametro al objeto que guardo en el localStorage
        var tipoSeguro = document.getElementById('cusR2').textContent;
    }

    ///// DESCUENTO DEPENDIENDO DEL AÑO /////
    var dY = document.getElementById("year");
    let descuentoYear = (dY.options[dY.selectedIndex].value) * 0.3;
    /////////////////////////////////////////

    // Llamo a la funcion calculos pasandole parametros para pintar en el HTML
    calculos(strUser, str, descuentoYear, tipo, marca, tipoSeguro);
    // Llamo a la funcion localObjeto pasandole parametros para almacenar los datos en el localStorage
    localObjeto(strUser, str, descuentoYear, tipoSeguro);

});


function calculos(c, y, d, t, m, ts) {

    // Ejecuto la funcion pasados 2500 milisegundos para que asi el spinner tenga un marge de 0.050 milisegundos
    setTimeout(function() {

        // Variable del precio final
        let precioFinal = precio + (((t) + (m)) - (d));

        // Pinto la seccion contenedora de la derecha inyectando codigo via JS
        let secD = document.getElementById("secD");
        // Asigno el HTML con += para que no sobreescriba los datos y me genere siempre una pastilla unica
        secD.innerHTML += `<div class="div1">
                            <div class="coche"></div>
                            <div class="texto">
                                <p class="demo"></p>
                            </div>
                            </div>`;

        // Controlo que el parametro que le paso a la funcion sea igual a la marca Audi, Seat o Volkswagen
        if (c === "Audi") {
            // Selecciono la posicion [0] del HTML creado en la seccion derecha
            const modelo = document.getElementsByClassName("coche")[0];
            // Creo el elemento img para que me contenga la foto
            var foto = document.createElement('img');
            // url de la imagen
            foto.src = 'img/audi.png';
            // incluyo la clase
            foto.setAttribute("class", "imgCoche");
            // ancho de la foto
            foto.width = 400;
            // Pinto en el HTML con un appendChild()
            modelo.appendChild(foto);

            // pinto texto
            const txt = document.getElementsByClassName("demo")[0];
            // inyecto el HTML via JS
            txt.innerHTML = "<span class='txtDesc'>Descripcion<br>del Seguro</span>" + "<br>" + "Marca: " + c + "<br>" + "Año: " + y + "<br>" + "Tipo seguro: " + ts + "<br>" + "Total: " + precioFinal + "€";


        } else if (c === "Seat") {
            // Selecciono la posicion [0] del HTML creado en la seccion derecha
            const modelo = document.getElementsByClassName("coche")[0];
            // Creo el elemento img para que me contenga la foto
            var foto = document.createElement('img');
            // url de la imagen
            foto.src = 'img/seat.png';
            // incluyo la clase
            foto.setAttribute("class", "imgCocheSeat");
            // ancho de la foto
            foto.width = 400;
            // Pinto en el HTML con un appendChild()
            modelo.appendChild(foto);

            // pinto texto
            const txt = document.getElementsByClassName("demo")[1];
            // inyecto el HTML via JS
            txt.innerHTML = "<span class='txtDesc'>Descripcion<br>del Seguro</span>" + "<br>" + "Marca: " + c + "<br>" + "Año: " + y + "<br>" + "Tipo seguro: " + ts + "<br>" + "Total: " + precioFinal + "€";


        } else {
            // Selecciono la posicion [0] del HTML creado en la seccion derecha
            const modelo = document.getElementsByClassName("coche")[0];
            // Creo el elemento img para que me contenga la foto
            var foto = document.createElement('img');
            // url de la imagen
            foto.src = 'img/golf.png';
            // incluyo la clase
            foto.setAttribute("class", "imgCocheGolf");
            // ancho de la foto
            foto.width = 400;
            // Pinto en el HTML con un appendChild()
            modelo.appendChild(foto);

            // pinto texto
            const txt = document.getElementsByClassName("demo")[2];
            // inyecto el HTML via JS
            txt.innerHTML = "<span class='txtDesc'>Descripcion<br>del Seguro</span>" + "<br>" + "Marca: " + c + "<br>" + "Año: " + y + "<br>" + "Tipo seguro: " + ts + "<br>" + "Total: " + precioFinal + "€";
        }
    }, 2500);

}

// Funcion para guardar los datos como objeto en el localStorage
function localObjeto(c, y, d, ts) {
    // Array contenedor de los objetos
    var arrayLocal;
    // Objeto
    var itemObject = {
        coche: c,
        year: y,
        descuento: d,
        tipoSeguro: ts
    };
    // Controlo si el localStorage esta vacio o no
    if (localStorage.getItem('cocheAsegurado') === null) {
        // Defino el array
        arrayLocal = [];
    } else {
        arrayLocal = JSON.parse(localStorage.getItem('cocheAsegurado'));
    }

    // Guardo el objeto en el array con push()
    arrayLocal.push(itemObject);

    // Meterlo en localStorage
    localStorage.setItem('cocheAsegurado', JSON.stringify(arrayLocal));

}


const printPDF = document.getElementById('printPDF').addEventListener('click', function() {

    if (localStorage.getItem('cocheAsegurado') === null) {
        alert('No se puede completar la accion. No hay datos para imprimir');
    } else {
        let cocheAsegurado = JSON.parse(localStorage.getItem('cocheAsegurado'));

        console.log(cocheAsegurado);

        for (var i = 0; i < cocheAsegurado.length; i++) {

            var co = cocheAsegurado[i].coche;
            var yC = cocheAsegurado[i].year;
            // console.log(co);

            let obj = {
                coche: co,
                year: yC
            };

            imprimir(obj);
        }
    }

});

function imprimir(obj) {
    // window.location.href = "divs.html";
    document.getElementById("test").style.display = "none";
    // Pinto la seccion contenedora de la derecha inyectando codigo via JS
    document.getElementById("secI").style.display = "block";
    let secI = document.getElementById("secI");
    // Asigno el HTML con += para que no sobreescriba los datos y me genere siempre una pastilla unica
    secI.innerHTML += `<div class="div1">
                        <div class="coche"></div>
                        <div class="texto">
                            <p class="demo"></p>
                        </div>
                        </div>`;

    document.getElementsByClassName("coche")[0].innerHTML = obj.coche;
    document.getElementsByClassName("demo")[0].innerHTML = obj.year;

    // alert(valorMarca + " " + valorYear);

    window.print();

    location.reload();
}