//#ceFitImage.js

(function($){
	var CE_Gallery = function(element) {
		var gallery_elem = $(element);
		var main_image = gallery_elem.find('img.ce_gal_image');
		var obj = this;
		
		
		var _constructor = function()
		{
			createHtml();
			obj.resizeElem(main_image);
			resizeBind();
			bindCarousel();
		};
		var createHtml = function()
		{
			//Creates the required HTML to use the JS
			$('img.ce_gal_image').wrap('<div class="ce_gal_image_cntr ce_main_image" id="ce_image_1"/>');
			$('.ce_main_image').after('<div class="ce_gal_image_cntr ce_loading_image" id="ce_image_2"/>');
			$('#ce_gal_carousel').wrap('<div class="ce_gal_caro_view"/>');
			$('.ce_gal_caro_view').wrap('<div class="ce_gal_caro_container ce_gal_caro_mid"/>');
			$('.ce_gal_caro_view').after('<div disabled="disabled" class="ce_gal_caro_prev ce_gal_caro_prev_disabled">&lt;</div><div class="ce_gal_caro_next">&gt;</div><div class="ce_gal_caro_expand"><p>Expand</p></div><div class="ce_gal_caro_shrink"><p>Shrink</p></div>');
			
			var caro_items = $('#ce_gal_carousel').find('li');
			caro_items.each(function(){
				var index = $(this).index();
				$(this).addClass('ce_gal_caro_item-'+ index);
			});
		};
		this.resizeElem = function(elem)
		{
			//This sizes the image to the size of the screen without distorting
			var win_width	= $(window).width(),
			win_height		= $(window).height() - gallery_elem.offset().top,
			win_ratio		= win_height / win_width,
			elem_width		= elem.width(),
			elem_height		= elem.height(),
			elem_ratio		= elem_height / elem_width,
			new_width,new_height,
			new_left,new_top;
			
			new_height = win_height;
			new_width = new_height * elem_width / elem_height;
			
			if( new_width > win_width){
				new_width = win_width;
				new_height = new_width * elem_height / elem_width;
			}
				
			elem.css({
				width		: new_width + 'px',
				height		: new_height + 'px',
				marginTop	: (win_height - new_height) / 2 + 'px'
			});
		};
		this.adjustCarouselSize = function(direction)
		{
			if(direction === 'grow'){
				if ($('.ce_gal_caro_container').hasClass('ce_gal_caro_min')){
					$('.ce_gal_caro_container').removeClass('ce_gal_caro_min').addClass('ce_gal_caro_mid');
				} else if ($('.ce_gal_caro_container').hasClass('ce_gal_caro_mid')){
					$('.ce_gal_caro_container').removeClass('ce_gal_caro_mid').addClass('ce_gal_caro_max');
				}
				
			}
			else {
				if ($('.ce_gal_caro_container').hasClass('ce_gal_caro_max')){
					$('.ce_gal_caro_container').removeClass('ce_gal_caro_max').addClass('ce_gal_caro_mid');
				} else if ($('.ce_gal_caro_container').hasClass('ce_gal_caro_mid')){
					$('.ce_gal_caro_container').removeClass('ce_gal_caro_mid').addClass('ce_gal_caro_min');
				}
				
			}
			
		};
		
		var bindCarousel = function()
		{
			$('.ce_gal_caro_expand').bind('click' , function(){
				obj.adjustCarouselSize('grow');
			});
			$('.ce_gal_caro_shrink').bind('click' , function(){
				obj.adjustCarouselSize('shrink');
			});
		};
		
		var resizeBind = function()
		{
			$(window).bind('resize' , function() {
				obj.resizeElem(main_image);
			});
		};
		
		// Sample Public Method
		this.publicMethod = function()
		{
			console.log('publicMethod() called!');
		};
		
		// Sample Private Method
		var privateMethod = function()
		{
			console.log('private method called!');
		};
		
		//Calling constructor
		_constructor();
	};
	
	
	//JQuery Wrapper to make it a JQuery Pluggin
	$.fn.ce_gallery = function()
	{
		return this.each(function()
		{
			var element = $(this);
			
			// Return early if this element already has a plugin instance
			if (element.data('ce_gallery')) return;

			var ce_gallery = new CE_Gallery(this);
			
			// Store plugin object in this element's data
			element.data('ce_gallery', ce_gallery);
		});
	};
})(jQuery);