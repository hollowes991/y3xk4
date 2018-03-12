import css from '../css/app2.css';


$(window).load(function(){
	

	if( !$().flexslider ) {
		console.log('loadFlexSlider: FlexSlider not Defined.');
		return true;
	}

	var $flexSliderEl = $('.fslider:not(.customjs)').find('.flexslider');
	if( $flexSliderEl.length > 0 ){
		$flexSliderEl.each(function() {
			var $flexsSlider = $(this),
				flexsAnimation = $flexsSlider.parent('.fslider').attr('data-animation'),
				flexsEasing = $flexsSlider.parent('.fslider').attr('data-easing'),
				flexsDirection = $flexsSlider.parent('.fslider').attr('data-direction'),
				flexsReverse = $flexsSlider.parent('.fslider').attr('data-reverse'),
				flexsSlideshow = $flexsSlider.parent('.fslider').attr('data-slideshow'),
				flexsPause = $flexsSlider.parent('.fslider').attr('data-pause'),
				flexsSpeed = $flexsSlider.parent('.fslider').attr('data-speed'),
				flexsVideo = $flexsSlider.parent('.fslider').attr('data-video'),
				flexsPagi = $flexsSlider.parent('.fslider').attr('data-pagi'),
				flexsArrows = $flexsSlider.parent('.fslider').attr('data-arrows'),
				flexsThumbs = $flexsSlider.parent('.fslider').attr('data-thumbs'),
				flexsHover = $flexsSlider.parent('.fslider').attr('data-hover'),
				flexsSheight = $flexsSlider.parent('.fslider').attr('data-smooth-height'),
				flexsTouch = $flexsSlider.parent('.fslider').attr('data-touch'),
				flexsUseCSS = false;

			if( !flexsAnimation ) { flexsAnimation = 'slide'; }
			if( !flexsEasing || flexsEasing == 'swing' ) {
				flexsEasing = 'swing';
				flexsUseCSS = true;
			}
			if( !flexsDirection ) { flexsDirection = 'horizontal'; }
			if( flexsReverse == 'true' ) { flexsReverse = true; } else { flexsReverse = false; }
			if( !flexsSlideshow ) { flexsSlideshow = true; } else { flexsSlideshow = false; }
			if( !flexsPause ) { flexsPause = 5000; }
			if( !flexsSpeed ) { flexsSpeed = 600; }
			if( !flexsVideo ) { flexsVideo = false; }
			if( flexsSheight == 'false' ) { flexsSheight = false; } else { flexsSheight = true; }
			if( flexsDirection == 'vertical' ) { flexsSheight = false; }
			if( flexsPagi == 'false' ) { flexsPagi = false; } else { flexsPagi = true; }
			if( flexsThumbs == 'true' ) { flexsPagi = 'thumbnails'; } else { flexsPagi = flexsPagi; }
			if( flexsArrows == 'false' ) { flexsArrows = false; } else { flexsArrows = true; }
			if( flexsHover == 'false' ) { flexsHover = false; } else { flexsHover = true; }
			if( flexsTouch == 'false' ) { flexsTouch = false; } else { flexsTouch = true; }

			$flexsSlider.flexslider({
				selector: ".slider-wrap > .slide",
				animation: flexsAnimation,
				easing: flexsEasing,
				direction: flexsDirection,
				reverse: flexsReverse,
				slideshow: flexsSlideshow,
				slideshowSpeed: Number(flexsPause),
				animationSpeed: Number(flexsSpeed),
				pauseOnHover: flexsHover,
				video: flexsVideo,
				controlNav: flexsPagi,
				directionNav: flexsArrows,
				smoothHeight: flexsSheight,
				useCSS: flexsUseCSS,
				touch: flexsTouch,
				start: function(slider){
					$('.flex-prev').html('<i class="icon-angle-left"></i>');
					$('.flex-next').html('<i class="icon-angle-right"></i>');
				},
				after: function(){
					
				}
			});
		});
	}
	
	let oc__item = document.querySelectorAll(".flex-control-thumbs>li");
	$(".flex-control-nav").css("width", oc__item[0].offsetWidth*oc__item.length + "px");

	let fslide = document.querySelector(".slide img");
	let fslide__video = document.querySelector(".slide>iframe");
	fslide__video.setAttribute("width", fslide.offsetWidth);
	fslide__video.setAttribute("height", fslide.offsetHeight);

	oc__item.forEach(function(elem){
		elem.classList.add("item");
	})

})
