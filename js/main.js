function myFunction() {
    var x = document.getElementById("hamnavmenu");
    if (x.className === "navmenu") {
        x.className += " responsive";
    } else {
        x.className = "navmenu";
    }
}