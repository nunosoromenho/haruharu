var banners = document.querySelectorAll('.o-banner-gallery');

for (var i = 0; i < banners.length; ++i) {
  var wrapperElem = banners[i].parentNode;

  var slider = tns({
    container: banners[i],
    items: 1,
    slideBy: 'page',
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: false,
    speed: 1000,
    controlsPosition: 'bottom',
    animateIn: 'jello',
    animateOut: 'rollOut',
    navPosition: 'bottom',
    navContainer: wrapperElem.querySelector('.tns-nav'),
    autoplayButtonOutput: false,
    controls: false,
    controlsContainer: false
  });

  var time;
  var timeout;
  var delay;

  var mouseOn = function () {
    slider.pause();
    time = slider.getInfo().navContainer.querySelector('.tns-nav-active span').offsetWidth * 5000 / slider.getInfo().navContainer.querySelector('.tns-nav-active').offsetWidth;
    timeout = 5000 - time;
    clearTimeout(delay);
  };

  wrapperElem.onmouseenter = mouseOn;
  wrapperElem.onmouseover = mouseOn;

  wrapperElem.onmouseleave = function () {
    clearTimeout(delay);
    delay = setTimeout(function () {
      slider.pause();
      slider.goTo('next');
      slider.play();
      clearTimeout(delay);
    }, timeout);
  };

  wrapperElem.querySelector('.prev').onclick = function (e) {
    e.preventDefault();
    clearTimeout(delay);
    slider.pause();
    slider.goTo('prev');
  };

  wrapperElem.querySelector('.next').onclick = function (e) {
    e.preventDefault();
    clearTimeout(delay);
    slider.pause();
    slider.goTo('next');
  };
}
