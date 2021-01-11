function openClose() {
    var x = document.getElementById("myNav");
    if (x.className === "myNav") {
        x.className += " squishy";
    } else {
        x.className = "myNav";
    }
}