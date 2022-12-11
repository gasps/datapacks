if (document.addEventListener) {
    document.addEventListener("DOMContentLoaded", function() {
        loaded();
    });
} else if (document.attachEvent) {
    document.attachEvent("onreadystatechange", function() {
        loaded();
    });
}
function loaded() {
    setInterval(loop, 250);
}
var x = 0;
var titleText = [ "g", "ga", "gas", "gasp", "gasps", "gasps.", "gasps.g", "gasps.gi", "gasps.git", "gasps.gith", "gasps.githu", "gasps.github", "gasps.github.", "gasps.github.i", "gasps.github.io","", "gasps.github.io", "", "gasps.github.io", "gasps.github.i", "gasps.github.", "gasps.github", "gasps.githu", "gasps.gith", "gasps.git", "gasps.gi", "gasps.g", "gasps.", "gasps", "gasp", "gas", "ga", "g", "", "<", "<3", "", "<3", "", "<3"];

function loop() {
    document.getElementsByTagName("title")[0].innerHTML = titleText[x++%titleText.length];
}