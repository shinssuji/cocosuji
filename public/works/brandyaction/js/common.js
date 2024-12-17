$(function(){
    
    // 메인 인트로 애니메이션
    function main() {
        var winWidth = $(window).width(); // 가로너비 체크

        // 해상도 768 이상
        if(winWidth > 767) {
            function movingIntro(){
                var currentItem = $('.intro-nav .item.active'); 
                var nextItem = ($('.intro-nav .item.active').next().length > 0) ? $('.intro-nav .item.active').next() : $('.intro-nav .item:nth-child(1)');

                currentItem.removeClass('active');
                nextItem.addClass('active');
            }

            let interval = setInterval(function(){
                movingIntro();
            }, 1800);

            setTimeout(() => {
                setInterval(interval, 1800);
            }, 5000);
        }
    }
    $(window).on("load", function(){ main() })

    
    // 아코디언
    $('.accordion .acc-head').on("click", function() {
        $(this).attr('aria-expanded', function(i, attr) {
            return attr == 'true' ? 'false' : 'true'
        })
    })


    // 섹션1 슬라이더
    $(".trouble-slider").slick({
        responsive: [
            {
                breakpoint: 9999,
                settings: 'unslick',
            },
            {
                breakpoint: 767,
                settings: {
                    infinite: true,
                    slidesToShow: 1,
                    pauseOnHover: false,
                    arrows: false,
                    touchMove: false,
                    cssEase: 'ease',
                    centerMode: true,
                    centerPadding: '4.1rem',
                }
            }
        ]
    });


    // 섹션4 슬라이더
    $(".box-slider").slick({
        infinite: true,
        speed : 500,
        autoplay: true,
        autoplaySpeed: 1000,
        variableWidth: true,
        pauseOnHover: false,
        arrows: false,
        touchMove: false,
        cssEase: 'ease',
        responsive: [
            {
                breakpoint: 767,
                settings: 'unslick'
            }
        ]
    });
    $(window).on('resize', function() {
        $('.box-slider, .trouble-slider').slick('resize');
    });


    // 섹션6 슬라이더
    $(".solution-slider").slick({
        infinite: true,
        speed : 500,
        autoplay: true,
        autoplaySpeed: 2500,
        slidesToScroll: 1,
        variableWidth: true,
        swipeToslide: true,
        draggable: true,
        swipe: true,
        touchThreshold: 500,
        touchMove: true,
        cssEase: 'ease',
        arrows: true,
        prevArrow: ".sec6 .slick-control .slick-type1-prev",
        nextArrow: ".sec6 .slick-control .slick-type1-next",
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    variableWidth: false,
                    fade: true,
                    adaptiveHeight: true,
                }
            }
        ]
    });

    // 스크롤 상단 애니메이션
    $('.go-top').on('click', function() {
        $('body,html').stop().animate({scrollTop: 0}, 200);
    })

    // 동영상 재생 썸네일 
    $(".sec3 .video").on("click", function() {
        if($(this).hasClass('stop')) {
         $(this).removeClass("stop");
         $(this).find("video").get(0).play();
        } else {
         $(this).addClass("stop");
        }
     })
      
});


$(document).ready(function() {
    AOS.init();
});
