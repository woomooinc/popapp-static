(function($) {
    var reviewCarouselWidth = 366;

    var landingResize = function() {
        var landing = document.getElementById('popapp-landing');
        var landing_title = document.getElementById('landing--title');

            if (landing) {
            if (window.innerHeight <= 650) {
                landing.style.height = '650px';
                landing_title.style.marginTop = '100px';
            } else {
                var height = window.innerHeight >= 1000 ? 1000 : window.innerHeight;
                landing.style.height = height + 'px';

                var landing_watch_video = document.getElementById('landing--watch-video');
                var landing_download_app = document.getElementById('landing--download-app');
                var landing_social_network = document.getElementById('landing--social-network');

                var landing_content_height = parseInt(window.getComputedStyle(landing_title).height, 10) +
                parseInt(window.getComputedStyle(landing_title).marginBottom, 10) +
                parseInt(window.getComputedStyle(landing_watch_video).height, 10) +
                parseInt(window.getComputedStyle(landing_watch_video).marginBottom, 10) +
                parseInt(window.getComputedStyle(landing_download_app).height, 10) +
                parseInt(window.getComputedStyle(landing_download_app).marginBottom, 10) +
                parseInt(window.getComputedStyle(landing_social_network).height, 10);

                landing_title.style.marginTop = (height - landing_content_height) / 2 + 'px';
            }

            var reviewCarouselMargin = 0;

            if (window.innerWidth >= reviewCarouselWidth*3 + 30) {
                reviewCarouselMargin = 20;
                document.getElementById('review-carousel').style.width = (reviewCarouselWidth*3 + 30) + 'px';
            } else if (window.innerWidth >= reviewCarouselWidth*2 + 20) {
                reviewCarouselMargin = 20;
                document.getElementById('review-carousel').style.width = (reviewCarouselWidth*2 + 20) + 'px';
            } else {
                reviewCarouselMargin = 0;
                document.getElementById('review-carousel').style.width = reviewCarouselWidth + 'px';
            }

            $('#review-carousel').flexslider({
                animation: "slide",
                directionNav: window.isMobile ? false : true,
                itemWidth: reviewCarouselWidth,
                itemMargin: reviewCarouselMargin
            });
        }

        if (window.innerWidth <= 768) {
            $('#feature-share-video').attr('width', '90%');
        } else {
            $('#feature-share-video').attr('width', '100%');
        }
    };

    var carousel = document.getElementById('make-anyones-app-a-reality');

    if (carousel && carousel.style) {
        carousel.style.height = (window.innerHeight > 480 ? (window.innerHeight >= 800 ? 800 : window.innerHeight) : 480) + 'px';
    }

    window.addEventListener('resize', function(event) {
        event.preventDefault();

        var simple = document.getElementById('simple-intutive-powerful');
        var simple_extends = document.getElementById('simple-intutive-extends');

        if (simple) {
            simple.style.height = parseInt(simple_extends.offsetTop, 10) + parseInt(window.getComputedStyle(simple_extends).height, 10)/* 618px */ + 'px';
        }

        landingResize();
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
                    list[i].style.top = '9px';
                } else {
                    list[i].style.top = (k * 3 * 14 - (8 * k - 1) + 8) + 'px';
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
                list[i].style.top = '9px';
            }
        }
    }, false);
    countries.addEventListener('mousecancel', function(event) {
        event.preventDefault();
        var list = countries.children[0].childNodes;
        for (var i = 0; i < list.length; i++) {
            if (list[i].nodeName.toLowerCase() === 'li') {
                list[i].style.top = '9px';
            }
        }
    }, false);

    $('#reality-carousel').flexslider({
        animation: "slide",
        directionNav: window.isMobile ? false : true,
        //itemWidth: 314,
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

    landingResize();

    // Below code by JD
    // Landing clip
    var $landingClipWrap = $('#landing-clip-wrap');
    var $landingClip = $('#landing-clip')
    var showLandingClipWrap = function() {
      $landingClipWrap.addClass('show');
      $landingClip[0].play();
      Mousetrap.bind('esc', function() {
        hideLandingClipWrap();
      });
    }
    var hideLandingClipWrap = function() {
      $landingClipWrap.removeClass('show');
      $landingClip[0].pause();
      Mousetrap.reset();
    }
    $landingClipWrap.click(function(e) {
      if ($(e.target).attr('id') === 'landing-clip-bg'){
        hideLandingClipWrap();
      }
    });
    $('#landing--watch-video').click(function(e) {
      showLandingClipWrap();
    });
    $('#landing-clip-close').click(function(e) {
      hideLandingClipWrap();
    });
})(jQuery);