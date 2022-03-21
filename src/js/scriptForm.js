window.addEventListener("load", function () {
    document.querySelector(".form-submit").addEventListener('submit', function (event) {
        event.preventDefault();
        const formData = new FormData(this);
        fetch("/ajax/feedback/feedback/",
            {
                method: "POST",
                body: formData,
            })
            .then(function (res) {
                return res.json();
            })
            .then(function (data) {
                document.querySelector(".form-submit").reset();

                document.querySelector(".modal-thank-title").innerHTML = data.title;
                document.querySelector(".modal-thank-desc").innerHTML = data.desc;
                document.querySelector(".modal-thank").classList.add('active');
                document.querySelector(".overflow-modal").classList.add('active');
            })
    });

    const formClose = document.querySelectorAll (".overflow-modal");
    formClose.forEach(function (close) {
        close.addEventListener('click', (event) => {
            document.querySelector('.modal-thank').classList.remove("active");
            document.querySelector('.overflow-modal').classList.remove("active");
        })
    });
});





/*

    let mobile = $('.mobile-menu');
    let scrollPrev = 0;
    let mobile_btn = $('.mobile-menu__btn');

    function barPointPosition() {
        let point = $(`.progress-bar__point`);
        let currentPosition = $(`.progress-bar__percent`);
        let changePosition = $(`.progress-bar__point.current`);

        currentPosition.css('width', `${changePosition[0].id}%`)

        point.each(function () {
            $(this).css('left', `${this.id}%`);
        });
    };
    barPointPosition();
*/


    /*
    $('.zodiac-signs').on("click", function () {
        if ($(this).has('.animationWave')) {
            $('.zodiac-signs').removeClass('animationWave');
        }
        $(this).addClass('animationWave');
    });

*/
    /*

        $(window).scroll(function () {
            let scrolled = $(window).scrollTop();

            if (mobile_btn.hasClass('active')) return;

            scrolled > 10 && scrolled > scrollPrev ? mobile.addClass('out') : mobile.removeClass('out');

            scrollPrev = scrolled;
        });
    */

    /*   let mobile_nav = $(`.mobile-nav`);


       mobile_btn.on('click', function () {
           mobile_btn.toggleClass(`active`);

           mobile_btn.hasClass(`active`) ? mobile_nav.fadeIn(500) : mobile_nav.fadeOut(500);
       })
   */




