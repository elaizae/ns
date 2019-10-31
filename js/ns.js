/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/




var knop = document.querySelector("button");
var element = document.querySelector("main>form");
knop.addEventListener("click", function () {
    element.classList.toggle("show");
});


var show = this.classList.toggle("search");

var content = this.nextElementSibling;
if (content.style.display === "block") {
    content.style.display = "none";
} else {
    content.style.display = "block";
}

var bar = document.getElementsByClassName("searchbutton");
var i;

for (i = 0; i < bar.length; i++) {
    bar[i].addEventListener("click", show());
}
