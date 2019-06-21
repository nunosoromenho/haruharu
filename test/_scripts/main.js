var banners = document.querySelectorAll('.o-banner-gallery');

for (var i = 0; i < banners.length; ++i) {
  var slider = tns({
    container: banners[i],
    items: 1,
    slideBy: 'page',
    autoplay: true,
    autoplayTimeout: 5000,
    speed: 1000,
    controlsPosition: 'bottom',
    animateIn: 'jello',
    animateOut: 'rollOut',
    navPosition: 'bottom',
    autoplayButtonOutput: false,
    controlsContainer: false
  });
}
