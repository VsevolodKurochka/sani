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
		$(".default-pr-c").owlCarousel({
			items: 3,
			itemsDesktop: [1199, 3],
			navigation: true,
			navigationText: ["",""],
			pagination: false
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
		toggleBlock(".header-resp-btn-menu .navbar-toggle", "#header-resp-toggler-menu");
		toggleBlock("#header-resp-login-btn", "#header-resp-toggler-form");
		toggleBlock("#header-resp-search-btn", "#header-resp-toggler-search");
		$(".menu ul > li").each(function(){
			$(this).children("a").click(function(e){
				$(this).parent().toggleClass("opened-menu");
				$(this).next().slideToggle("slow");
				e.preventDefault();
				//return false;
			});
		});


		//MENU
			$(".menu").wrap("<div class='menu-wrap' />");
			$(".aside .menu-wrap").wrap("<div class='aside-menu' />");
			function swapMenu(){
				// if ( $(".responsive-menu").length > 0 ) {
				// 	console.log(1);
				// }else{
				// 	console.log(0);
				// }
				if ( $(document).width() <= 991 ) {
					$(".menu-wrap").appendTo(".responsive-menu");
				}else {
					$(".menu-wrap").appendTo(".aside-menu");
				}
			}
			swapMenu();
			$(window).resize(swapMenu);

		//NAVIGATION
			$(".top-nav-menu").wrap('<div class="top-nav-menu-w" />');
			function swapNav(){
				if ( $(document).width() <= 991 ) {
					$(".top-nav-menu").appendTo(".responsive-top-nav-menu");
				}else {
					$(".top-nav-menu").appendTo(".top-nav-menu-w");
				}
			}
			swapNav();
			$(window).resize(swapNav);

		function hideShow(clickEl, hideEl, showEl){
			$(clickEl).click(function(){
				//$(hideEl).toggleClass("dn");
				if( $(showEl).hasClass("dn") ){
					$(showEl).removeClass("dn").addClass("db");
				}
				if( $(hideEl).hasClass("db") ){
					$(hideEl).removeClass("db").addClass("dn");
				}
				//$(showEl).toggleClass("db");
			});
		}
		// $(".header-resp-toggler-form-btn").click(function(){
		// 	$(this).parent().hide().next().show();
		// });
		hideShow(".entry-btn", "#head-resp-re", "#head-resp-entry");
		hideShow(".reg-btn", "#head-resp-entry", "#head-resp-reg");
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
		// $(".top-nav").css({
		// 	'margin-top' : $(".header").outerHeight() + "px"
		// });

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
		//CART
		$(".input-group-value .minus").click(function(){
			var input = $(this).parent().next();
			input.val( parseInt(input.val() ) - 1 );
			if( input.val() < 1 ){
				input.val(1);
			}
			return false;
		});
		$(".input-group-value .plus").click(function(){
			var input = $(this).parent().prev();
			input.val( parseInt(input.val() ) + 1 );
			return false;
		});
		//PRODUCT
		$(".product-image-carousel").jCarouselLite({
		    btnNext: ".product-image-carousel-wrap .next",
		    btnPrev: ".product-image-carousel-wrap .prev"
		});

		$(".product-image-carousel img").click(function() {
		    $(".product-image-big img").attr("src", $(this).attr("src"));
		});

		var divs = $(".category-product-box > .item-b-wrap");
		for(var i = 0; i < divs.length; i+=3) {
		  divs.slice(i, i+3).wrapAll("<div class='cf'></div>");
		}
		//FILTER
			$(".show-filter").click(function(){
				$(this).parent().next().slideToggle("slow");
			});
			function changePosFilter(){
				if ( $(document).width() <= 991 ) {
					$(".filter-block").appendTo(".filter-responsive-wrap");
				}else{
					$(".filter-block").appendTo(".filter-block-aside");
				}
			}
			changePosFilter;
			$(window).resize(changePosFilter);

		
		$("#slider-price").slider({
			min: 0,
			max: 1000,
			values: [0,1000],
			range: true,
			stop: function(event, ui) {
        $("input#minCost").val($("#slider-price").slider("values",0));
        $("input#maxCost").val($("#slider-price").slider("values",1));
    },
    slide: function(event, ui){
        $("input#minCost").val($("#slider-price").slider("values",0));
        $("input#maxCost").val($("#slider-price").slider("values",1));
    }
		});
		$("input#minCost").change(function(){
			var value1=$("input#minCost").val();
			var value2=$("input#maxCost").val();
		  if(parseInt(value1) > parseInt(value2)){
				value1 = value2;
				$("input#minCost").val(value1);
			}
			$("#slider-price").slider("values",0,value1);	
		});

			
		$("input#maxCost").change(function(){
			var value1=$("input#minCost").val();
			var value2=$("input#maxCost").val();
			
			if (value2 > 1000) { value2 = 1000; $("input#maxCost").val(1000)}

			if(parseInt(value1) > parseInt(value2)){
				value2 = value1;
				$("input#maxCost").val(value2);
			}
			$("#slider-price").slider("values",1,value2);
		});
});	