function openClose() {
    var x = document.getElementById("myNav");
    if (x.className === "nav") {
        x.className += " squishy";
    } else {
        x.className = "nav";
    }
}