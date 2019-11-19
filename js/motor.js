const precio = 600;

function myFunction() {
    var e = document.getElementById("car");
    var strUser = e.options[e.selectedIndex].text;
    var y = document.getElementById("year");
    var str = y.options[y.selectedIndex].text;
    modelo(strUser, str);
}

function modelo(c, y) {
    document.getElementById("demo").innerHTML = c + " " + y + " " + precio;

}