(function() {
    var carousel = document.getElementById('make-anyones-app-a-reality');

    if (carousel && carousel.style) {
        carousel.style.height = (window.innerHeight > 480 ? (window.innerHeight >= 800 ? 800 : window.innerHeight) : 480) + 'px';
    }

    window.addEventListener('resize', function(event) {
        event.preventDefault();
        
        var simple = document.getElementById('simple-intutive-powerful');
        var simple_extends = document.getElementById('simple-intutive-extends');

        simple.style.height = parseInt(simple_extends.offsetTop, 10) + parseInt(window.getComputedStyle(simple_extends).height, 10)/* 618px */ + 'px';
    }, false);

    var header = document.getElementById('header'),
        container = document.getElementById('container'),
        footer = document.getElementById('footer'),
        menu = document.getElementById('mobile-menu');

    header.style.marginLeft = '0px';
    container.style.marginLeft = '0px';
    footer.style.marginLeft = '0px';

    var slidemenu = document.getElementById('slidemenu');
    slidemenu.addEventListener('click', function(event) {
        event.preventDefault();

        var header = document.getElementById('header'),
            container = document.getElementById('container'),
            footer = document.getElementById('footer'),
            menu = document.getElementById('mobile-menu');
            header.style.marginLeft = '0px';
            container.style.marginLeft = '0px';
            footer.style.marginLeft = '0px';

        if (menu.classList.contains('active')) {
            header.style.width = '100%';
            header.style.marginLeft = '0px';
            container.style.width = '100%';
            container.style.marginLeft = '0px';
            footer.style.width = '100%';
            footer.style.marginLeft = '0px';
            menu.style.marginLeft = '100%';
            menu.className = '';
        } else {
            header.style.width = window.innerWidth+'px';
            container.style.width = window.innerWidth+'px';
            footer.style.width = window.innerWidth+'px';

            header.style.marginLeft = 100 - window.innerWidth + 'px';
            container.style.marginLeft = 100 - window.innerWidth + 'px';
            footer.style.marginLeft = 100 - window.innerWidth + 'px';
            menu.style.marginLeft = '100px';
            menu.className = 'active';
        }
    }, false);
    var closeslidemenu = document.getElementById('close-mobile-menu');
    closeslidemenu.addEventListener('click', function(event) {
        event.preventDefault();

        var header = document.getElementById('header'),
            container = document.getElementById('container'),
            footer = document.getElementById('footer'),
            menu = document.getElementById('mobile-menu');

            header.style.width = '100%';
            header.style.marginLeft = '0px';
            container.style.width = '100%';
            container.style.marginLeft = '0px';
            footer.style.width = '100%';
            footer.style.marginLeft = '0px';
            menu.style.marginLeft = '100%';
            menu.className = '';
    }, false);

    var countries = document.getElementById('countries');
    countries.addEventListener('mouseenter', function(event) {
        event.preventDefault();
        var list = countries.children[0].childNodes, k = 0;
        for (var i = 0; i < list.length; i++) {
            if (list[i].nodeName.toLowerCase() === 'li') {
                if (list[i].classList.contains('active')) {
                    list[i].style.top = '4px';
                } else {
                    list[i].style.top = (k * 3)+'em';
                }
                k++;
            }
        }
    }, false);
    countries.addEventListener('mouseleave', function(event) {
        event.preventDefault();
        var list = countries.children[0].childNodes;
        for (var i = 0; i < list.length; i++) {
            if (list[i].nodeName.toLowerCase() === 'li') {
                list[i].style.top = '4px';
            }
        }
    }, false);
    countries.addEventListener('mousecancel', function(event) {
        event.preventDefault();
        var list = countries.children[0].childNodes;
        for (var i = 0; i < list.length; i++) {
            if (list[i].nodeName.toLowerCase() === 'li') {
                list[i].style.top = '4px';
            }
        }
    }, false);

    $('#review-carousel').flexslider({
        animation: "slide",
        directionNav: window.isMobile ? false : true,
        itemWidth: 345,
        itemMargin: 0
    });
    $('#reality-carousel').flexslider({
        animation: "slide",
        directionNav: window.isMobile ? false : true,
        itemWidth: 314,
        itemMargin: 0
    });


    var header = document.getElementById('header');
    var mainHeaderTrigger = document.getElementById('popapp-landing');
    var featureHeaderTrigger = document.getElementById('feature-landing');
    var isFloatHeader = false, isFloatStep = false;

    window.addEventListener('scroll', function(event) {
        event.preventDefault();

        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        if (featureHeaderTrigger) {
            if (scrollTop > featureHeaderTrigger.offsetHeight) {
                if (!isFloatHeader) {
                    header.className = 'header float';
                    isFloatHeader = true;
                }
            } else {
                if (scrollTop >= featureHeaderTrigger.offsetHeight / 2) {
                    if (!isFloatStep) {
                        header.className = 'header animate-step';
                        isFloatStep = true;
                    }
                }
                if (scrollTop <= featureHeaderTrigger.offsetHeight) {
                    isFloatStep = false;
                    isFloatHeader = false;
                }
                if (scrollTop === 0) {
                    header.className = 'header';
                    isFloatStep = false;
                    isFloatHeader = false;   
                }
            }
        }
        if (mainHeaderTrigger) {
            if (scrollTop > mainHeaderTrigger.offsetHeight) {
                if (!isFloatHeader) {
                    header.className = 'header float';
                    isFloatHeader = true;
                }
            } else {
                if (scrollTop >= mainHeaderTrigger.offsetHeight / 2) {
                    if (!isFloatStep) {
                        header.className = 'header animate-step';
                        isFloatStep = true;
                    }
                }
                if (scrollTop <= mainHeaderTrigger.offsetHeight) {
                    isFloatStep = false;
                    isFloatHeader = false;
                }
                if (scrollTop === 0) {
                    header.className = 'header';
                    isFloatStep = false;
                    isFloatHeader = false;   
                }
            }
        }
    }, false);
})();