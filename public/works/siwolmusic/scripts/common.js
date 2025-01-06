/*
 * 해당 파일에서 사용하는 script는 보다 바람직한 UI 표현을 위한 코드입니다.
 * swiper 와 lotti 를 제외한 코드는 UI FLOW 확인 용도로만 확인해 주시고, 프론트 개발시 참고만 해주세요!
*/


// debounce 함수 정의
const debounce = (func, wait) => {
    let timeout;
    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
};

// header scroll add class
const handleEvents = () => {
    const boardHeader = document.querySelector('.board-header');
    const pageHeader = document.querySelector('.board-title-wrap')

    // 메인 헤더 이벤트
    const headerFixed = () => {
        const windowTop = window.scrollY;
        if(windowTop > 0)  {
            boardHeader.classList.add('fixed-line')
        } else {
            boardHeader.classList.remove('fixed-line');
        }
    }

    // 모바일 헤더 이벤트
    const onScroll = () => {
        const windowTop = window.scrollY;
        if(windowTop > 0)  {
            pageHeader.classList.add('fixed-line')
        } else {
            pageHeader.classList.remove('fixed-line');
        }
    }

    // 브라우저 너비 체크 및 이벤트 리스너 추가/제거
    const checkWidth = () => {
        if (window.innerWidth <= 1024) {
            window.addEventListener('scroll', onScroll);
            onScroll();  // 초기 스크롤 체크
        } else {
            window.removeEventListener('scroll', onScroll);
            pageHeader.classList.remove('fixed-line');
        }
    };

    // 초기 로드 시 및 창 크기 변경 시 checkWidth 호출
    headerFixed();
    checkWidth();
    window.addEventListener('scroll', headerFixed);
    window.addEventListener('resize', debounce(checkWidth, 200));
}


const initSwiper= () => {
    var musicSwiper = undefined;
    if (window.innerWidth > 1024 && musicSwiper == undefined) {
        const musicSwiper = new Swiper('.music-swiper', {
            slidesPerView: "auto",
            // loop: true,
            freeMode: true, // 슬라이드 넘길 때 위치 고정 여부
            autoplay: false,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });
    } else if (window.innerWidth <= 1024 && musicSwiper != undefined) {
        musicSwiper.destroy();
        musicSwiper = undefined;
    }
}

initSwiper();
window.addEventListener('resize', initSwiper);


window.addEventListener('load', () => {
    initSwiper();
    // swiper
    // 공지
    const noticeSwiper = new Swiper('.notice-swiper', {
        direction: 'vertical',
        autoHeight : true,
        loop: true,
        freeMode: true, // 슬라이드 넘길 때 위치 고정 여부
        // autoplay: false,
        autoplay: {
            delay: 2500,
            disableOnInteraction: true, // false : 스와이프 후 자동 재생
        },
        pagination: {
            el: ".swiper-pagination",
            type: 'bullets',
            clickable: true, // 버튼 클릭 여부
        },

    });

    // 음원
    // const musicSwiper = new Swiper('.music-swiper', {
    //     slidesPerView: "auto",
    //     // loop: true,
    //     freeMode: true, // 슬라이드 넘길 때 위치 고정 여부
    //     autoplay: false,
    //     navigation: {
    //         nextEl: ".swiper-button-next",
    //         prevEl: ".swiper-button-prev",
    //     },
    // });



    
});

