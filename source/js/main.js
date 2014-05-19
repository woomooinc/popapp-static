(function() {
    var carousel = document.getElementById('make-anyones-app-a-reality');

    if (carousel && carousel.style) {
        carousel.style.height = (window.innerHeight > 480 ? (window.innerHeight >= 900 ? 900 : window.innerHeight) : 480) + 'px';
    }
    
    var header = document.getElementById('header');
    var mainHeaderTrigger = document.getElementById('popapp-landing');
    var featureHeaderTrigger = document.getElementById('feature-landing');
    var isFloatHeader = false, isFloatStep = false;

    window.addEventListener('scroll', function(event) {
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
    });
})();