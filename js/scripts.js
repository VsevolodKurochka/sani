$(document).ready(function(){
		// var header_menu_name = 'menu_box',
		// 	header_menu = $('.' + header_menu_name),
		// 	navbar_toggle = $('.navbar-toggle');
		// function toggler(){
		// 	navbar_toggle.toggleClass('navbar-toggle-open');
		// 	header_menu.slideToggle("slow");
		// }
		// navbar_toggle.click(function(e){
		// 	toggler();
		// 	e.stopPropagation();
		// });
		// $(document).click(function(e){
		// 	if( header_menu.hasClass(header_menu_name + '-open') ) {
		// 		if ( ! $(e.target).is('.'+header_menu_name + ', .'+header_menu_name+"*") ) {
		// 			toggler();
		// 		}
		// 	}
		// });
		$('.anchor').click(function(){
			var href = $(this).attr('href');
			$('body,html').animate({
				scrollTop: $(href).offset().top
			},2000);
			return false;
		});
		// $(window).on('hashchange', function(e){
		// 	history.replaceState ("", document.title, e.originalEvent.oldURL);
		// });
		//CAROUSEL SETTINGS
		$("#main-reviews").owlCarousel({
			autoPlay: false,
			singleItem: true,
			navigation: true,
			navigationText: ["",""],
			pagination: false
		});
		$("#slider-main").owlCarousel({
			autoPlay: false,
			singleItem: true,
			navigationText: ["",""],
			navigation: true,
			pagination: true
		});

		//NAVIGATION ENTRY AND REGISTER
		$(".modal-toggle").click(function(e){
			var tab = e.target.hash;
			$('li > a[href="' + tab + '"]').tab("show");
		});

		//FOOTER RESPONSIVE BLOCK TOGGLE
		function toggleBlock(toggleClick, toggleElement){
			$(toggleClick).click(function(){
				$(toggleElement).slideToggle("slow");
			});
		}
		toggleBlock("#btn-catalog", "#catalog .footer-block");
		toggleBlock("#btn-menu", "#menu .footer-block");
		
		//MAIN SEO TEXT
		$("#showseotext").click(function(){
			$(".seo-text-p").toggleClass("seo-text-p-hidden seo-text-opened");
			if( $(".seo-text-p").hasClass("seo-text-opened") ) {
				$("#showseotext").text("Скрыть текст");
			}else{
				$("#showseotext").text("Читать далее");
			}
		});

		//MAIN BLUE BLOCK
		$(".leader-text-form input").focus(function(){
			$(this).parent().addClass("leader-text-form-input-wrap-active");
		});
		$(".leader-text-form input").focusout(function(){
			$(this).parent().removeClass("leader-text-form-input-wrap-active");
		});

		// SORT
		$(".sort-block-list li").each(function(){
			$(this).click(function(){
				// if ( $(this).next().hasClass("active") || $(this).prev().hasClass("active") ) {
				// 	$(this).removeClass("active");
				// }
				$(this).toggleClass("active");
			});
		});
		$(".top-nav").css({
			'margin-top' : $(".header").outerHeight() + "px"
		});

		//ASIDE
		  //PICKUP
		  $(".aside-pickup-block-link").click(function(){
		  	$(this).toggleClass("active");
		  	$(this).next().slideToggle("slow");
		  });

		$("#totop").click(function(){
			$("body,html").animate({
				scrollTop: 0
			}, 400);
			return false;
		});
		
});	