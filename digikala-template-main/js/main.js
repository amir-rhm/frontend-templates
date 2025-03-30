$(document).ready(function () {




    // position sticky menu

    let prevScrollPos = window.pageYOffset;
   
    window.onscroll = function () {
        let currentScrollPos = window.pageYOffset;
         console.log(prevScrollPos);
         console.log(currentScrollPos   );
        if (currentScrollPos > prevScrollPos) {
            document.getElementById('sticky-menu').style.top = 0 + 'px';
        } else {
            document.getElementById('sticky-menu').style.top = 100 + '%';

        }
        prevScrollPos = currentScrollPos;
    }


    //search
    $('.search-input').on('click', function (e) {
        $('.mask-search').fadeIn(200);
        $('.most-searched').addClass('most-search-active');
        $(this).addClass('input-active');
        e.stopPropagation();
    })
    $('.most-searched').on('click', function (e) {
        e.stopPropagation();
    })

    $(document).on('click', function (event) {
        $('.mask-search').fadeOut(200);
        $('.most-searched').removeClass('most-search-active');
        $('.search-input').removeClass('input-active');
    })

    $('.mask-search ').on('click', function () {

    })

    //menu level2 hover
    let item_menu = $('.menu-levels-2 .title-categories a');
    let options = $('.options-categories >div');
    item_menu.on('mouseenter', function () {
        let index = $(this).index();
        options.removeClass('is-active');
        item_menu.removeClass('is-active');
        $(this).addClass('is-active');
        options.eq(index).addClass('is-active');
        // console.log(index);
    })

    //header profile
    $('.header-user-action').on('click', function (e) {
        $(this).toggleClass('active');
        e.stopPropagation();
    })
    $(document).on('click', function () {
        $('.header-user-action').removeClass('active');
    })


    // header-menu start
    $('.submenu-level2-item').hover(function () {
        $('.submenu-level2-item').removeClass('active-item');
        $('.submenu-level3').removeClass('active');
        $('.submenu-level3', this).addClass('active');
        $(this).addClass('active-item');
    })

    // header-menu end

    //scroll-to-up start===========================
    $('.jump-to-top').on('click', function () {
        $("html,body").animate({scrollTop: 0}, 1000, "swing");
    })
    // scroll-to-up end===========================

    // owl-carousel single suggestion start======================
    var owl = $('#suggestion-slider');
    owl.owlCarousel({
        items: 1,
        rtl: true,
        loop: true,
        autoplay: true,
        touchDrag: false,
        mouseDrag: false,
        autoplayHoverPause: true,
        autoplayTimeout: 5000,
        dots: false,
        onInitialized: startProgressBar,
        onTranslate: resetProgressBar,
        onTranslated: startProgressBar,
    });

    function startProgressBar() {
        fillProgress();
    }

    function resetProgressBar() {
        emptyProgress();
    }

    $('.promo-single').hover(function () {
        emptyProgress();
        //reset
        owl.trigger('stop.owl.autoplay');
    }, function () {
        fillProgress();
        owl.trigger('play.owl.autoplay')
    })

    function fillProgress() {
        $('.slide-progress').css({
            width: "100%",
            transition: "width 5000ms"
        });
    }

    function emptyProgress() {
        $('.slide-progress').css({
            width: "0",
            transition: "width 0ms"
        });
    }

    // owl-carousel single suggestion end======================

    // owl-carousel product start
    $('.product-slider').owlCarousel({
        nav: true,
        navText: ["<i class='fa fa-chevron-right'></i>", "<i class='fa fa-chevron-left'></i>"],
        dots: false,
        smartSpeed: 500,
        rtl: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                slideBy: 1
            },
            576: {
                items: 2,
                slideBy: 1
            },
            768: {
                items: 3,
                slideBy: 2
            },
            992: {
                items: 4,
                slideBy: 3
            },
            1200: {
                items: 4,
                slideBy: 3
            }
        }
    });
    // owl-carousel product end


    // list category tab start
    var item = $('.box-category-list .main-product-tab-area .tab-menu ul .tab-item');
    var content = $('.box-category-list .main-product-tab-area .tab-content .category');
    item.click(function () {
        var tabIndex = $(this).index();
        item.removeClass('active');
        $(this).addClass('active');
        content.removeClass('active');
        content.eq(tabIndex).addClass('active');
    })


    // heart start
    $('.action-product .fa-heart-o').click(function () {
        var heart = $(this);
        if (heart.hasClass('fa-heart')) {
            heart.removeClass('fa-heart');
            heart.addClass('fa-heart-o');
        } else {
            heart.removeClass('fa-heart-o');
            heart.addClass('fa-heart');
        }
    })
    // heart end

    // list category tab end


    //    special start

    $('.special').owlCarousel({
        nav: true,
        navText: ["<i class='fa fa-chevron-right'></i>", "<i class='fa fa-chevron-left'></i>"],
        dots: false,
        smartSpeed: 500,
        rtl: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                slideBy: 1
            },
            576: {
                items: 2,
                slideBy: 1
            },
            768: {
                items: 3,
                slideBy: 2
            },
            992: {
                items: 4,
                slideBy: 3
            },
            1200: {
                items: 4,
                slideBy: 3
            }
        }
    });
    //    special end


})

// input number cart start
//for practice insert after & before

$('<div class="quantity-nav-up">+</div>').insertBefore('.number-product input');
$('<div class="quantity-nav-down">-</div>').insertAfter('.number-product input');


$('.number-product').each(function () {
    var spinner = $(this),
        btnUp = spinner.find('.quantity-nav-up'),
        btnDown = spinner.find('.quantity-nav-down'),
        inputTag = spinner.find('input'),
        min = inputTag.attr('min'),
        max = inputTag.attr('max');

    btnUp.click(function () {
        var newValue;
        var oldValue = parseInt(inputTag.val());
        if (oldValue >= max) {
            newValue = oldValue;
        } else {
            newValue = oldValue + 1;
        }

        inputTag.val(newValue);
    });

    btnDown.click(function () {
        var newValue;
        var oldValue = inputTag.val();
        if (oldValue <= min) {
            newValue = oldValue;
        } else {
            newValue = oldValue - 1;
        }

        inputTag.val(newValue);
    });

});
// input number cart end


// verify code input start
var countdownTimerC = $("#countdown-verify-end");


function countDownTimer() {
    countdownTimerC.countdown({
        date: (new Date()).getTime() + 1000 * 60,
        text: '<span class="day">%s</span><span class="hour">%s</span><span>: %s</span><span>%s</span>',
        end: function () {
            countdownTimerC.html("<a href='' onclick='countDownTimer()' class='form-account-link'>ارسال مجدد</a>");
        }
    })
}

countDownTimer();


$(".code-number").keyup(function () {
    $(this).next().focus();
});
// verify code input end


