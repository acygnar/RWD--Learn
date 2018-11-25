(function () {
    $(window).scroll(function (e) {
        var currentposition = $(document).scrollTop();
        var bannerheight = $(".main-nav").height();
        if (currentposition > bannerheight) {
            $("header").addClass("opacity");
        } else {
            $("header").removeClass("opacity");
        }
    });

})();
var images = [
                'img/views1.jpg',
                'img/views2.jpg',
                'img/views3.jpg',
            ];
var num = 0;

function next() {
    var slider = document.querySelector('.slide');
    num++;
    if (num >= images.length) {
        num = 0;
    }
    slider.src = images[num];
}

function prev() {
    var slider = document.querySelector('.slide');
    num--;
    if (num < 0) {
        num = images.length - 1;
    }
    slider.src = images[num];
}
