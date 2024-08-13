$(document).ready(function () {
    $('select').styler();
    $(".phone").mask('+7 (999)-999-99-99');
})


$('.menu-href h3').on('click', function (e) {
    $(this).parent().toggleClass('menu-href-active')
    $(this).siblings("ul").slideToggle()
});


let indexPage = document.querySelector(".index-page")

$(document).ready(function () {
    setTimeout(function () {
        // $(".loader").removeClass("_open")
        $("header").addClass("in-viewport");
        $(".banner-main").addClass("in-viewport");
        $(".anim-style").addClass("in-viewport");
        $(".products-line-sec").addClass("in-view");
        $(".single-chamber-sec").addClass("in-view");

    }, 500);
    // if(!indexPage){
    //
    // } else{
    //     setTimeout(function () {
    //         $(".loader").removeClass("_open")
    //         $("header").addClass("in-viewport");
    //         $(".anim-style").addClass("in-viewport");
    //         $(".products-line-sec").addClass("in-view");
    //         $(".single-chamber-sec").addClass("in-view");
    //
    //     }, 5000);
    // }

});



$(document).ready(function () {
    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
        disableOn: 200,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });
});







// let $animation_element = $('.anim-newSing');
// let $window = $(window);
// function check_if_in_view() {
//     let window_height = $window.height();
//     let window_top_position = $window.scrollTop();
//     let window_bottom_position = ( window_height + window_top_position);
//     $.each($animation_element, function() {
//         let $element = $(this);
//         let element_height = $element.outerHeight();
//         let element_top_position = $element.offset().top;
//         let element_bottom_position = (element_height + element_top_position);
//         if((element_bottom_position >= window_top_position * .9) &&
//             (element_top_position <= window_bottom_position * 1.1)) {
//             $element.addClass('in-view');
//         }
//     });
// }
// $window.on('scroll resize', check_if_in_view);
// $window.trigger('scroll');

let animatedElements = document.querySelectorAll('.anim-newSing');

let Visible = function(target) {
    // Все позиции элемента
    let targetPosition = {
            top: window.pageYOffset + target.getBoundingClientRect().top,
            left: window.pageXOffset + target.getBoundingClientRect().left,
            right: window.pageXOffset + target.getBoundingClientRect().right,
            bottom: window.pageYOffset + target.getBoundingClientRect().bottom
        },
        // Получаем позиции окна
        windowPosition = {
            top: window.pageYOffset,
            left: window.pageXOffset,
            right: window.pageXOffset + document.documentElement.clientWidth,
            bottom: window.pageYOffset + document.documentElement.clientHeight
        };

    if (targetPosition.bottom - 40 > windowPosition.top &&
        targetPosition.top + 40 < windowPosition.bottom) {
        target.classList.add("in-view")
    } else {

    }
};

window.addEventListener('scroll', function() {
    initAnimElements()
});
initAnimElements()

function initAnimElements() {
    animatedElements.forEach(el => {
        Visible(el)
    })
}










$(document).ready(function () {
    $('.open-menu').on('click', function () {
        $(this).toggleClass('close-menu');
        if ($(this).hasClass('close-menu')) {
            $('header').addClass('header-active');
            $('body').addClass('body_fix');
        } else {
            $('header').removeClass('header-active');
            $('body').removeClass('body_fix');
        }
    });

    $(document).mouseup( function(e){
        let div = $( "header" );
        if ( !div.is(e.target)
            && div.has(e.target).length === 0 ) {
            if($(div).hasClass('header-active')){
                $(div).removeClass('header-active');
                $(".open-menu").toggleClass('close-menu');
                $('body').removeClass('body_fix');
            }
        }
    });
});

let generaSwiper = new Swiper(".generations-slider", {
    slidesPerView: 1,
    loop: true,
    speed: 1000,
    navigation: {
        nextEl: ".generations-button-next",
        prevEl: ".generations-button-prev",
    },
});

let generaSwiper2 = new Swiper(".generations-slider2", {
    noSwiping: true,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    speed: 3000,
    autoplay: {
        delay: 3500,
        disableOnInteraction: true,
    },
});





let completedSwiper = new Swiper(".completed-projects-slider", {
    slidesPerView: "auto",
    // loop: true,
    speed: 1000,
    // loopAdditionalSlides: 10,
    spaceBetween: 0,
    breakpoints: {
        // '1299': {
        //     slidesPerView: 3,
        //     slidesPerGroup: 1,
        //     spaceBetween: 14,
        // },
        // '570': {
        //     slidesPerView: 2,
        //     slidesPerGroup: 1,
        // },
        // '320': {
        //     slidesPerView: 1,
        //     slidesPerGroup: 1,
        //     spaceBetween: 6,
        // },
    },
    navigation: {
        nextEl: ".completed-button-next",
        prevEl: ".completed-button-prev",
    },
});



$('.completed-button-prev').on('click',function () {
    $('.completed-projects__cnt').addClass('completed-projects-act');
});

$('.completed-button-next').on('click',function () {
    $('.completed-button-prev').addClass('completed-button-active')
    $('.completed-projects__cnt').addClass('completed-projects-act')
});


$('.solutions__box').on('mouseover', function () {
    $('.solutions__box').removeClass('solutions__active')
    $(this).addClass('solutions__active');
});



let solutionsSwiper = new Swiper(".solutions__slider", {
    slidesPerView: 1,
    spaceBetween: 3,
    speed: 1000,
    pagination: {
        el: ".solutions-pagination",
        clickable: true,
    },
    breakpoints: {
        '1024': {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 14,
        },
        '320': {
            spaceBetween: 20,
        },
    },
});


function glassSliders() {
    let SlidersArray = []

    let sliders = document.querySelectorAll(".this-glass-slider")
    sliders.forEach((slider,index) => {
        slider.setAttribute("data-slider-id",index)

        SlidersArray[index] = new Swiper(`.this-glass-slider[data-slider-id="${index}"]`, {
            slidesPerView: "auto",
            spaceBetween: 0,
            speed: 1000,

            watchSlidesProgress: true,
            preventClicks :true,
            a11y: false,
            observer: true,
            observeParents: true,
            observeSlideChildren: true,

            navigation: {
                nextEl: `.this-glass-slider[data-slider-id="${index}"] ~ .this-glass-next`,
                prevEl: `.this-glass-slider[data-slider-id="${index}"] ~ .this-glass-prev`,
            },
        })
    })
}

glassSliders()


$(function () {
    let Accordion = function (el, multiple) {
        this.el = el || {};
        this.multiple = multiple || false;
        let links = this.el.find('.link');
        links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
    };
    Accordion.prototype.dropdown = function (e) {
        let $el = e.data.el;
        $this = $(this),
            $next = $this.next();
        $next.slideToggle();
        if (!e.data.multiple) {

            $el.find('.submenu').not($next).slideUp();
        }
        if (!$this.hasClass('open')) {
            $('.link').each(function () {
                $(this).removeClass('open')
            })
            $this.addClass('open')
        } else {
            $this.removeClass('open')
        }
    }
    let accordion = new Accordion($('#accordion'), false);
});




let interestedSwiper = new Swiper(".interested-slider", {
    slidesPerView: "auto",
    spaceBetween: 0,
    // loop: true,
    speed: 1000,
    navigation: {
        nextEl: ".interested-button-next",
        prevEl: ".interested-button-prev",
    },
    pagination: {
        el: ".interested-pagination",
        clickable: true,
    },
});



let productiondSwiper = new Swiper(".production-slider", {
    slidesPerView: "auto",
    spaceBetween: 0,
    // loop: true,
    speed: 1000,
    navigation: {
        nextEl: ".production-next",
        prevEl: ".production-prev",
    },

});



let missionSwiper = new Swiper(".our-mission-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    speed: 1000,
    navigation: {
        nextEl: ".mission-next",
        prevEl: ".mission-prev",
    },
    pagination: {
        el: ".mission-pagination",
        clickable: true,
    },
});




let historySwiper = new Swiper(".our-history-slide", {
    direction: "horizontal",
    slidesPerView: "auto",
    slideToClickedSlide: true,
    speed: 1000,
    freeMode: true,
    navigation: {
        nextEl: ".history-button-next",
        prevEl: ".history-button-prev",
    },
});

if($('.open-filter-mobile')){
    $('.open-filter-mobile').on('click',function () {
        $('.catalog__left').addClass('catalog-filter-active')
    });
}
$('.close-filter').on('click',function () {
    $('.catalog__left').removeClass('catalog-filter-active')
});



$('.project-cnt-open').on('click', function (e) {
    e.stopPropagation();
    if($(this).parent().hasClass('project-cnt-active')){
        $('.project-cnt-box').removeClass('project-cnt-active');
        $('.project-glass-sec').removeClass('_z-minus');
        $('.architectural-wrap').removeClass('_z-minus');
    }else{
        $('.project-cnt-box').removeClass('project-cnt-active');
        $(this).parent().addClass('project-cnt-active');
        $('.project-glass-sec').addClass('_z-minus');
        $('.architectural-wrap').addClass('_z-minus');

        let activeBlock = document.querySelector(".project-cnt-box.project-cnt-active")

        activeBlock.scrollIntoView({
            behavior: "smooth",
            inline: "center",
            block: 'nearest',
        })
    }
});

$('.project-cnt-click .apply').on('click', function (e) {
    e.stopPropagation();
    $('.project-cnt-box').removeClass('project-cnt-active');
    $('.project-glass-sec').removeClass('_z-minus');
    $('.architectural-wrap').removeClass('_z-minus');
});

$('.project-cnt-click .closed').on('click', function (e) {
    e.stopPropagation();
    $('.project-cnt-box').removeClass('project-cnt-active');
    $('.project-glass-sec').removeClass('_z-minus');
    $('.architectural-wrap').removeClass('_z-minus');
});


$('.project-cnt-drop').on('click', function (e) {
    e.stopPropagation();
});


$(window).on('click', function (e) {
    let menuSort = $('.project-cnt-box');
    if (e.target !== menuSort) {
        menuSort.removeClass('project-cnt-active')
        $('.project-glass-sec').removeClass('_z-minus');
        $('.architectural-wrap').removeClass('_z-minus');
    }
});


$('.expand-table-remove').on('click', function () {
    $(this).toggleClass('expand-table-act')
    $('.comparison__table').toggleClass('comparison-table-add')
});

$('.thickness-expand').on('click', function () {
    $(this).toggleClass('expand-table-act')
    $('.thickness__table').toggleClass('thickness-table-add')
});










$(document).ready(function () {
    addActiveClass('catalog__menu', 'catalog-menu-href');
    changeCaseBlock(this, 'catalog__menu', 'catalog-min', 'catalog-menu-href', 'catalog-tab-click');
    $('.catalog-tab-click').on('click', function () {
        changeActiveClassWithClick(this, 'catalog__menu', 'catalog-menu-href')
        changeCaseBlock(this, 'catalog__menu', 'catalog-min', 'catalog-menu-href', 'catalog-tab-click');

        document.querySelector(".catalog-tab-click.catalog-menu-href").scrollIntoView({
            behavior: "smooth",
            inline: "center",
            block: 'nearest',
        })
    })


    function addActiveClass(parent_menu, active_class) {
        let prt = $('.' + parent_menu);
        let prt_childrens = $(prt).children();
        let prt_child_li = $(prt_childrens).children();
        let first_child = $(prt_child_li)[0]
        if (!$(first_child).hasClass(active_class)) {
            !$(first_child).addClass(active_class)
        }
    }
    function changeActiveClassWithClick($this, parent_block, active_class) {
        let prt = $($this).parents('.' + parent_block);
        let prt_child = $(prt).find('li');
        $(prt_child).each(function () {
            $(this).removeClass(active_class);
        })
        $($this).addClass(active_class);
    }
    function changeCaseBlock($this, case_menu, case_block, active_class, menu_link) {
        let case_menu_block = $('.' + case_menu);
        let case_block_sub = $('.' + case_block);
        let case_block_child = $(case_block_sub).children();
        $(case_block_child).each(function () {
            $(this).css({display: 'none', height: 0});
        })

        if ($($this).hasClass(menu_link)) {
            let this_attr = $($this).attr('data-catalog');
            $(case_block_child).each(function () {
                if ($(this).attr('data-catalog') === this_attr) {
                    $(this).css({display: 'block', height: '100%'});
                }
            })

        } else {
            let active_find = $(case_menu_block).find('.' + active_class);
            let active_find_attr = $(active_find).attr('data-catalog');
            $(case_block_child).each(function () {
                if ($(this).attr('data-catalog') === active_find_attr) {
                    $(this).css({display: 'block', height: '100%'});

                }
            })
        }
    }




});



let a = 0;
$(window).scroll(function () {
    const el = $(".about-company__line");
    let oTop = el?.offset()?.top - window.innerHeight;
    if (a === 0 && $(window).scrollTop() > oTop) {
        $(".counter").each(function () {
            let $this = $(this),
                countTo = $this.attr("data-number");
            $({
                countNum: $this.text()
            }).animate(
                {
                    countNum: countTo
                },
                {
                    duration: 1300,
                    easing: "swing",
                    step: function () {
                        $this.text(
                            Math.ceil(this.countNum).toLocaleString("en")
                        );
                    },
                    complete: function () {
                        $this.text(
                            Math.ceil(this.countNum).toLocaleString("en")
                        );
                    }
                }
            );
        });
        a = 1;
    }
});


$("._tab").click(function() {
    let tabId = $(this).attr("data-tab")
    $(this).siblings("._tab").removeClass("_active")
    $(this).addClass("_active")
    $(".tab-content").removeClass("_active")
    $(`.${tabId}`).addClass("_active")
})

function Sliders() {
    let SlidersArray = []

    let sliders = document.querySelectorAll(".slider")
    sliders.forEach((slider,index) => {
        slider.setAttribute("data-slider-id",index)

        SlidersArray[index] = new Swiper(`.slider[data-slider-id="${index}"] .swiper-container`, {
            slidesPerView: "auto",
            spaceBetween: 0,
            watchSlidesProgress: true,
            preventClicks :true,
            a11y: false,
            observer: true,
            observeParents: true,
            observeSlideChildren: true,

            navigation: {
                nextEl: `.slider[data-slider-id="${index}"] .swiper-button-next`,
                prevEl: `.slider[data-slider-id="${index}"] .swiper-button-prev`,
            },
            pagination: {
                el: `.slider[data-slider-id="${index}"] .swiper-pagination`,
                type: 'bullets',
                clickable: true,
            },
        })

        $(".this-glass-photo,.completed-projects-pic").click(function () {
            let id = +$(this).attr("data-id")
            let modalId = $(this).attr("data-modal-id")
            if(slider.classList.contains("gallery-slider")){
                SlidersArray[index].slideTo(id,0)
            }
            $(`#${modalId}`).addClass("_active")
            $("body").addClass("fixed-body2")
        })
    })
}
Sliders()

let getScrollBarSize = (function() {
    var el = window.document.createElement('textarea'), style = {
        'visibility': 'hidden', 'position': 'absolute', 'zIndex': '-2147483647',
        'top': '-1000px', 'left': '-1000px', 'width': '1000px', 'height': '1000px',
        'overflow': 'scroll', 'margin': '0', 'border': '0', 'padding': '0'
    }, support = el.clientWidth !== undefined && el.offsetWidth !== undefined;

    for (var key in style) {
        if (style.hasOwnProperty(key)) {
            el.style[key] = style[key];
        }
    }

    return function() {
        var size = null;
        if (support && window.document.body) {
            window.document.body.appendChild(el);
            size = [el.offsetWidth - el.clientWidth, el.offsetHeight - el.clientHeight];
            window.document.body.removeChild(el);
        }

        document.documentElement.style.setProperty('--scrollWidth', `${size[0]}px`);
        return size;
    };
})();

window.addEventListener('resize', () => {
    getScrollBarSize()
})

getScrollBarSize()

function fix100vh() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}




$("._close-gallery-popup").click(function () {
    $(".gallery-popup").removeClass("_active")
    $("body").removeClass("fixed-body2")
})

let progressFillItems = document.querySelectorAll(".progress__fill")
progressFillItems.forEach(progressFill => {
    if(progressFill){
        let pathLength = progressFill.getTotalLength();
        let fillPercent = +progressFill.getAttribute("data-fill");
        progressFill.style.strokeDasharray = pathLength + ' ' + pathLength;
        progressFill.style.strokeDashoffset = pathLength * -1;

        setTimeout(()=>{
            setProgressFill(progressFill,fillPercent)
        },1000)
    }
})


function setProgressFill(el,progressNum) {
    let pathLength = el.getTotalLength();
    let drawLength = pathLength * (progressNum / 100);
    el.style.strokeDashoffset = drawLength - pathLength
}

$(".solution-card2").click(function () {
    let id = $(this).attr("data-modal-id")

    $("body").addClass("fixed-body2")
    $(`#${id}`).addClass("_open")
})

$("._close-solution-modal").click(function () {
    $("body").removeClass("fixed-body2")
    $(".solution-modal").removeClass("_open")
})

$(".open-search").click(function () {
    $(".header__search").addClass("_open")
})

$(".header__search-close").click(function () {
    $(".header__search").removeClass("_open")
})

$(document).mouseup( function(e){
    let div = $( ".header__search" );
    if ( !div.is(e.target)
        && div.has(e.target).length === 0 ) {
        if($(div).hasClass('_open')){
            $(div).removeClass('_open');
        }
    }
});
