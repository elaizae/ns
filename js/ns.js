/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/


/* code by webdevtrick ( https://webdevtrick.com) */
document.addEventListener('DOMContentLoaded', function () {
    let gototop = document.querySelector('.gototop');
    let body = document.documentElement;

    window.addEventListener('scroll', check);

    function check() {
        pageYOffset >= 500 && gototop.classList.add('visible');
        pageYOffset < 500 && gototop.classList.remove('visible');
    }


    gototop.onclick = function () {
        animate({
            duration: 700,
            timing: gogototopEaseOut,
            draw: progress =>
                body.scrollTop = (body.scrollTop * (1 - progress / 7))
        });
    }

    let circ = timeFraction =>
        1 - Math.sin(Math.acos(timeFraction > 1 ? timeFraction = 1 : timeFraction));

    let makeEaseOut = timing => timeFraction => 1 - timing(1 - timeFraction);
    let gogototopEaseOut = makeEaseOut(circ);
});

function animate(options) {
    let start = performance.now();

    requestAnimationFrame(function animate(time) {
        let timeFraction = (time - start) / options.duration;
        timeFraction > 1 && (timeFraction = 1);

        let progress = options.timing(timeFraction)

        options.draw(progress);
        timeFraction < 1 && requestAnimationFrame(animate);
    });
}

/* */

var coll = document.getElementsByClassName("searchbutton");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("searchbotton");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}

window.onscroll = function () {
    myFunction()
};

function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("scroll").style.width = scrolled + "%";
}
