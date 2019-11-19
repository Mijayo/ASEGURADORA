const precio = 600;

function myFunction() {
    var e = document.getElementById("car");
    var strUser = e.options[e.selectedIndex].text;
    var y = document.getElementById("year");
    var str = y.options[y.selectedIndex].text;
    // document.getElementById("demo").style.display = "block";
    modelo(strUser, str);
}

function modelo(c, y) {
    let secD = document.getElementById("demo");
    secD.innerHTML = c + " " + y + " " + precio;
}

let d = new Date();
let n = d.getFullYear();
let c = n - 20;
// console.log(c);
let cont = 0;
for (c; c <= n; c++) {
    let year = document.getElementById("year");
    // let app = document.write(`<option value="${cont++}">${c}</option>`);
    // year.appendChild(app);
    let opt = document.createElement('option');
    opt.value = cont++;
    opt.innerHTML = c;
    year.appendChild(opt);
    // console.log(c);
}