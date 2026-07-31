    // 1. 按钮点击动态效果
    const allButtons = document.querySelectorAll('.btn');
    allButtons.forEach(button => {
        button.addEventListener('click', function() {
            alert("Welcome to Yam Coffee! Explore more delicious coffee & our space.");
        })
    })

    // 2. 页面滚动淡入交互（独特UI交互组件，满足作业JS要求）
    const sections = document.querySelectorAll('.section-block');
    function fadeInOnScroll() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if(sectionTop < windowHeight - 100) {
                section.style.opacity = "1";
                section.style.transform = "translateY(0)";
            }
        })
    }
    // 初始化透明度
    sections.forEach(section => {
        section.style.opacity = "0";
        section.style.transition = "all 0.6s ease-out";
        section.style.transform = "translateY(30px)";
    })
    window.addEventListener('scroll', fadeInOnScroll);
    window.addEventListener('load', fadeInOnScroll);
    // Mission Vision 独立轮播逻辑，不干扰Hero轮播
    (function() {
    const slider = document.querySelector('.mission-slider');
    if(!slider) return;

    const track = slider.querySelector('.slider-track');
    const slides = slider.querySelectorAll('.slide');
    const prevBtn = slider.querySelector('.prev');
    const nextBtn = slider.querySelector('.next');
    const dots = slider.querySelectorAll('.dot');

    const slideTotal = slides.length;
    let currentIdx = 0;
    let autoTimer;

    // 更新轮播位置+激活圆点
    function refreshSlider() {
        track.style.transform = `translateX(-${currentIdx * 100}%)`;
        dots.forEach((dot, i) => dot.classList.toggle('active', i === currentIdx));
    }

    // 下一张
    function goNext() {
        currentIdx = (currentIdx + 1) % slideTotal;
        refreshSlider();
    }
    // 上一张
    function goPrev() {
        currentIdx = (currentIdx - 1 + slideTotal) % slideTotal;
        refreshSlider();
    }

    // 自动播放
    function startAuto() {
        autoTimer = setInterval(goNext, 4500);
    }
    function stopAuto() {
        clearInterval(autoTimer);
    }

    // 点击事件
    nextBtn.addEventListener('click', () => {
        goNext(); stopAuto(); startAuto();
    });
    prevBtn.addEventListener('click', () => {
        goPrev(); stopAuto(); startAuto();
    });
    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => {
        currentIdx = i;
        refreshSlider(); stopAuto(); startAuto();
        });
    });

    // 悬浮暂停
    slider.addEventListener('mouseenter', stopAuto);
    slider.addEventListener('mouseleave', startAuto);

    // 初始化
    refreshSlider();
    startAuto();
    })();