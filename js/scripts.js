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
		$(".link-fixed").each(function(){
			$(this).clone().appendTo(".visible-fixed-menu .top-nav-menu-list");
		});
		var headerF = "header-fixed";
		$(window).scroll(function(){
			if ( $(window).scrollTop() > $(".header").outerHeight() + 20 ) {
				$(".header").addClass(headerF);
			}else{
				$(".header").removeClass(headerF);
			}
		});
		
		//ADD CLASS ANCHOR TO ELEMENT, WHICH WILL BE CLICK and scroll to element
		$('.anchor').click(function(){
			var href = $(this).attr('href');
			$('body,html').animate({
				scrollTop: $(href).offset().top
			},2000);
			return false;
		});
		//RETURN TO TOP
		$("#totop").click(function(){
			$("body,html").animate({
				scrollTop: 0
			}, 400);
			return false;
		});
		//NAVIGATION ENTRY AND REGISTER
		$(".modal-toggle").click(function(e){
			var tab = e.target.hash;
			$('li > a[href="' + tab + '"]').tab("show");
		});
		$(".toggle-aside-menu").click(function(){
			$(".aside-menu").slideToggle("slow");
		});

		//MENU
		// $(".menu > ul > li > a").each(function(){
		// 	if ( $(this).children(".child-list").length > 0 ) {
		// 			console.log(2);
		// 	}
		// 	$(this).click(function(e){
		// 		$(this).parent().toggleClass("opened-menu");
		// 		$(this).next().slideToggle("slow");
		// 		e.preventDefault();
		// 	});
		// });
		$(".menu > ul > li").each(function(){
			if ( $(this).children(".child-list").length > 0 ) {
				$(this).children("a").click(function(e){
					$(this).parent().toggleClass("opened-menu");
					$(this).next().slideToggle("slow");
					e.preventDefault();
				});
			}
		});

		//FOOTER RESPONSIVE BLOCK TOGGLE
		
		function toggleBlock(toggleClick, toggleElement){
			$(toggleClick).click(function(){
				$(toggleElement).slideToggle("slow");
			});
		}
		toggleBlock("#btn-catalog", "#catalog .footer-block");
		toggleBlock("#btn-menu", "#menu .footer-block");

		function headerToggleBlock(toggleClick, toggleElement){
			$(toggleClick).click(function(){
				$(".header-resp-toggler > div").not(toggleElement).hide();
				$(toggleElement).slideToggle("slow");
			});
		}
		headerToggleBlock(".header-resp-btn-menu .navbar-toggle", "#header-resp-toggler-menu");
		headerToggleBlock("#header-resp-login-btn", "#header-resp-toggler-form");
		headerToggleBlock("#header-resp-search-btn", "#header-resp-toggler-search");

		var respPoint = 991;
		//MENU
			$(".menu").wrap("<div class='menu-wrap' />");
			$(".aside .menu-wrap").wrap("<div class='aside-menu' />");

		//NAVIGATION
			$(".top-nav-menu").wrap('<div class="top-nav-menu-w" />');

			function changePosElements(){

				if ( $(document).width() <= respPoint ) {

					//MENU
					$(".menu-wrap").appendTo(".responsive-menu");
					

					//NAVIGATION
					$(".top-nav-menu").appendTo(".responsive-top-nav-menu");

					//FILTER
					$(".filter-block").appendTo(".filter-responsive-wrap");

				}
				else{

					//MENU
					$(".menu-wrap").appendTo(".aside-menu");
					// $(".menu .icon").click(function(){
					// 	$(this).parent().toggleClass("opened-menu");
					// 	$(this).prev().slideToggle("slow");
					// });

					//NAVIGATION
					$(".top-nav-menu").appendTo(".top-nav-menu-w");

					//FILTER
					$(".filter-block").appendTo(".filter-block-aside");

				}
				
			}
			changePosElements();
			$(window).resize(changePosElements);


		function hideShowEntryReg(clickEl, showEl){
			$(clickEl).click(function(){
				$(".header-resp-toggler-form-inner > div").hide();
				$(showEl).show();
			});
		}
		hideShowEntryReg(".entry-btn", "#head-resp-entry");
		hideShowEntryReg(".reg-btn", "#head-resp-reg");
		//MAIN SEO TEXT
		$("#showseotext").click(function(){
			$(".seo-text-p").toggleClass("seo-text-p-hidden seo-text-opened");
			if( $(".seo-text-p").hasClass("seo-text-opened") ) {
				$("#showseotext").text("Скрыть текст");
			}else{
				$("#showseotext").text("Читать далее");
			}
		});
		$("#showCat").click(function(){
			$(".news-category-list").toggleClass("news-category-list-hidden");
			if( $(".news-category-list").hasClass("news-category-list-hidden") ) {
				$("#showCat").text("Все рубрики");
			}else{
				$("#showCat").text("Скрыть рубрики");
				
			}
		});

		//MAIN BLUE BLOCK
		$(".leader-text-form input")
			.focus(function(){
				$(this).parent().addClass("leader-text-form-input-wrap-active");
			})
			.focusout(function(){
				$(this).parent().removeClass("leader-text-form-input-wrap-active");
			});


		//ASIDE
		  //PICKUP
		  $(".aside-pickup-block-link").click(function(){
		  	$(this).toggleClass("active");
		  	$(this).next().slideToggle("slow");
		  });

		
		//INPUT WITH INCREASE
		$(".input-group .minus").click(function(){
			var input = $(this).parent().next();
			input.val( parseInt(input.val() ) - 1 );
			if( input.val() < 1 ){
				input.val(1);
			}
			return false;
		});
		$(".input-group .plus").click(function(){
			var input = $(this).parent().prev();
			input.val( parseInt(input.val() ) + 1 );
			return false;
		});
		//PRODUCT
		// $(".product-image-carousel img").click(function() {
		//     $(".product-image-big img").attr("src", $(this).attr("src"));
		// });

		//FILTER
			$(".show-filter").click(function(){
				$(this).parent().next().slideToggle("slow");
			});
			
		// $(".radio-input-parent input").click(function(){
		// 	$(".radio .radio-input-parent").removeClass("radio-input-parent-active");
		// 	$(this).closest(".radio-input-parent").toggleClass("radio-input-parent-active");
		// });
		function radioCartClicked(clickEl, allDivs){
			$(clickEl).click(function(){
				$(allDivs).removeClass("radio-input-parent-active");
				$(this).closest(".radio-input-parent").toggleClass("radio-input-parent-active");
			});
		}
		radioCartClicked(".radio-delivery input", ".radio-delivery > div");
		radioCartClicked(".radio-payment input", ".radio-payment > div");

		
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
		//FANCYBOX
		$(".various").fancybox({
			maxWidth	: 800,
			maxHeight	: 600,
			fitToView	: false,
			padding: 7,
			minHeight: 400,
			width		: '70%',
			height		: '70%',
			autoSize	: false,
			closeClick	: false,
			openEffect	: 'none',
			closeEffect	: 'none'
		});
		$(".fancybox").fancybox({
			openEffect	: 'none',
			closeEffect	: 'none',
			padding: 7
		});
				//CAROUSEL SETTINGS
		$(".product-image-carousel").jCarouselLite({
		    btnNext: ".product-image-carousel-wrap .next",
		    btnPrev: ".product-image-carousel-wrap .prev"
		});		
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
});	