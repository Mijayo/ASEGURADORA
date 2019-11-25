const calcularSeguro = document.getElementById('calcular').addEventListener('click', function(e) {
    e.preventDefault();
    // alert('hola');
    let secD = document.getElementById("secD");
    secD.innerHTML = `<div class='div1'></div>`;
});




// var BLOCKS_PER_CHART = 10;

// function generateChart(chartContainer) {
//     var container = document.createElement("div");
//     var text = "Hello World!";
//     var blockDiv, textSpan; // used in the for loop

//     container.className = "container2";
//     document.getElementById(chartContainer.replace("#", "")).appendChild(container);

//     for (var i = 0; i < BLOCKS_PER_CHART; i++) {
//         blockDiv = document.createElement("div");
//         blockDiv.className = "block";
//         textSpan = document.createElement("span");
//         textSpan.append(text); // see note about browser compatibility
//         blockDiv.append(textSpan);
//         container.append(blockDiv);
//     }
// }