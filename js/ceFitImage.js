//#ceFitImage.js

(function($){
	var CE_Fit_Image = function(element) {
		var elem = $(element);
		var obj = this;
		
		
		var _constructor = function()
		{
			elem.css({position:'absolute'});
			obj.adjustImage();
			resizeBind();
		};
		this.adjustImage = function()
		{
			var win_width	= $(window).width(),
			win_height		= $(window).height(),
			win_ratio		= win_height / win_width,
			elem_width		= elem.width(),
			elem_height		= elem.height(),
			elem_ratio		= elem_height / elem_width,
			new_width,new_height,
			new_left,new_top;
			
			if(elem_ratio >= 1){
				new_height = win_height;
				new_width = new_height * elem_width / elem_height;
				if( new_width > win_width){
					new_width = win_width;
					new_height = new_width * elem_height / elem_width;
				}
			}
			else{
				new_width = win_width;
				new_height = new_width * elem_height / elem_width;
				if( new_height > win_height){
					new_height = win_height;
					new_width = new_height * elem_width / elem_height;
				}
			}
				
			elem.css({
				width	: new_width + 'px',
				height	: new_height + 'px',
				left	: (win_width - new_width) / 2 + 'px',
				top		: (win_height - new_height) / 2 + 'px'
			});
		};
		
		var resizeBind = function()
		{
			$(window).bind('resize' , function() {
				obj.adjustImage();
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
	$.fn.ce_fit_img = function()
	{
		return this.each(function()
		{
			var element = $(this);
			
			// Return early if this element already has a plugin instance
			if (element.data('ce_fit_img')) return;

			var ce_fit_img = new CE_Fit_Image(this);
			
			// Store plugin object in this element's data
			element.data('ce_fit_img', ce_fit_img);
		});
	};
})(jQuery);