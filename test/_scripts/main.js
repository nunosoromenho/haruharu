var forEach = function (array, callback, scope) {
  for (var i = 0; i < array.length; i++) {
    callback.call(scope, i, array[i]);
  }
};

var banners = document.querySelectorAll('.o-banner-gallery-wrapper');

forEach(banners, function (index, value) {
  var gallery = banners[index].querySelector('.o-banner-gallery');
  var delay;

  var slider = tns({
    container: gallery,
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
    navContainer: banners[index].querySelector('.tns-nav'),
    controls: false,
    autoplayButtonOutput: false
  });

  var wrapperELem = slider.getInfo().container.parentNode.parentNode.parentNode.parentNode;

  wrapperELem.onmouseenter  = function () {
    slider.pause();
    clearTimeout(delay);
  };

  wrapperELem.onmouseleave = function () {
    var time;
    var timeout;
    clearTimeout(delay);
    time = slider.getInfo().navContainer.querySelector('.tns-nav-active span').offsetWidth * 5000 / slider.getInfo().navContainer.querySelector('.tns-nav-active').offsetWidth;
    timeout = 5000 - time;
    delay = setTimeout(function () {
      slider.goTo('next');
      slider.play();
      clearTimeout(delay);
    }, timeout);
  };

  wrapperELem.querySelector('.prev').addEventListener('click', function (event) {
    event.preventDefault();
    clearTimeout(delay);
    slider.pause();
    slider.goTo('prev');
  });

  wrapperELem.querySelector('.next').addEventListener('click', function (event) {
    event.preventDefault();
    clearTimeout(delay);
    slider.pause();
    slider.goTo('next');
  });
});
