var banners=document.querySelectorAll(".o-banner-gallery");for(var i=0;i<banners.length;++i){var slider=tns({container:banners[i],items:1,slideBy:"page",autoplay:true,autoplayTimeout:5e3,speed:1e3,controlsPosition:"bottom",animateIn:"jello",animateOut:"rollOut",navPosition:"bottom",autoplayButtonOutput:false,controlsContainer:false})}