// Quitamos todos los parametros de la URL
window.history.pushState("object or string", "Title", "/" + window.location.href.substring(window.location.href.lastIndexOf('/') + 1).split("?")[0]);
// localStorage.clear();

// Obtengo la fecha actual con la funcion Date()
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

// Defino las variables constantes del precio base en 600
const precio = 600;
const incrementoMarcaAudi = 0.3;
const incrementoMarcaVolkswagen = 0.2;
const incrementoMarcaSeat = 0.1;
const seguroBasico = 0.3;
const seguroCompleto = 0.5;


function yoQueSe() {
    document.getElementById("spinner").style.display = "block";

    setTimeout(function() {
        document.getElementById("spinner").style.display = "none";
        document.getElementById("secD").style.display = "block";
    }, 2450);

}


const calcularSeguro = document.getElementById('calcular').addEventListener('click', function(e) {
    e.preventDefault();
    yoQueSe();

    document.getElementById("secD").style.display = "none";

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
    localObjeto(strUser, str, descuentoYear, tipoSeguro);

});


function calculos(c, y, d, t, m, ts) {

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

function localObjeto(c, y, d, ts) {

    var arrayLocal;

    var itemObject = {
        coche: c,
        year: y,
        descuento: d,
        tipoSeguro: ts
    };

    if (localStorage.getItem('cocheAsegurado') === null) {
        // Defino el array
        arrayLocal = [];
    } else {
        arrayLocal = JSON.parse(localStorage.getItem('cocheAsegurado'));
    }

    // 
    arrayLocal.push(itemObject);

    // Meterlo en localStorage
    localStorage.setItem('cocheAsegurado', JSON.stringify(arrayLocal));

}

/*let cocheAsegurado = JSON.parse(localStorage.getItem('cocheAsegurado'));

console.log(cocheAsegurado);

if (localStorage.getItem('cocheAsegurado') === null) {
    alert('No se puede completar la accion. No hay datos para imprimir');
} else {
    for (var i = 0; i < cocheAsegurado.length; i++) {
        var co = cocheAsegurado[i].coche;
        var yC = cocheAsegurado[i].year;
    }
}*/


const printPDF = document.getElementById('printPDF').addEventListener('click', function() {

    if (localStorage.getItem('cocheAsegurado') === null) {
        alert('No se puede completar la accion. No hay datos para imprimir');
    } else {
        let cocheAsegurado = JSON.parse(localStorage.getItem('cocheAsegurado'));

        console.log(cocheAsegurado);

        for (var i = 0; i < cocheAsegurado.length; i++) {

            var co = cocheAsegurado[i].coche;
            var yC = cocheAsegurado[i].year;
            console.log(co);
        }
    }

});

someJSONdata = [{
        name: `${this.co}`,
        email: 'john@doe.com',
        phone: '111-111-1111'
    },
    {
        name: 'Barry Allen',
        email: 'barry@flash.com',
        phone: '222-222-2222'
    },
    {
        name: 'Cool Dude',
        email: 'cool@dude.com',
        phone: '333-333-3333'
    }
];



/*let cocheAsegurado = JSON.parse(localStorage.getItem('cocheAsegurado'));

console.log(cocheAsegurado);

for (var i = 0; i < cocheAsegurado.length; i++) {

    var co = cocheAsegurado[i].coche;
    var yC = cocheAsegurado[i].year;
}

someJSONdata = [{
    coche: `${co}`,
    year: `${yC}`,
    tipoSeguro: '',
    precio: ''
}];*/