var forEach=function(e,n,t){for(var o=0;o<e.length;o++){n.call(t,o,e[o])}};var isMobile=function(e){return e.offsetParent===null};var banners=document.querySelectorAll(".o-banner-gallery-wrapper");forEach(banners,function(e,n){var t=banners[e].querySelector(".o-banner-gallery");var o=banners[e].querySelector(".tns-controls");var a;var r=tns({container:t,items:1,slideBy:"page",autoplay:true,autoplayTimeout:5e3,autoplayHoverPause:false,speed:1e3,controlsPosition:"bottom",navPosition:"bottom",navContainer:banners[e].querySelector(".tns-nav"),controls:false,autoplayButtonOutput:false,swipeAngle:40,preventScrollOnTouch:"auto"});if(!isMobile(o)){var l=r.getInfo().container.parentNode.parentNode.parentNode.parentNode;l.onmouseenter=function(){r.pause();clearTimeout(a)};l.onmouseleave=function(){var e;var n;clearTimeout(a);e=r.getInfo().navContainer.querySelector(".tns-nav-active span").offsetWidth*5e3/r.getInfo().navContainer.querySelector(".tns-nav-active").offsetWidth;n=5e3-e;a=setTimeout(function(){r.goTo("next");r.play();clearTimeout(a)},n)};l.querySelector(".prev").addEventListener("click",function(e){e.preventDefault();clearTimeout(a);r.pause();r.goTo("prev")});l.querySelector(".next").addEventListener("click",function(e){e.preventDefault();clearTimeout(a);r.pause();r.goTo("next")})}else{var u=banners[e].querySelectorAll(".tns-nav button");u.forEach(function(){this.addEventListener("click",function(){r.play()})})}});