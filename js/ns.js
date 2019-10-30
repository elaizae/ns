/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/




var knop = document.querySelector("button");
var element = document.querySelector("main>form");
knop.addEventListener("click", function () {
    element.classList.toggle("show");
});






/* https://www.w3schools.com/howto/howto_js_collapsible.asp */

var coll = document.getElementsByClassName("searchbutton");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("search");

        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}
