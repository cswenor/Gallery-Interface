//#ceMenu.js

(function($){
	var CE_Menu = function(element) {
		var elem = $(element);
		var obj = this;
		var logo = elem.find('.logo');
		var logo_anchor = logo.find('a');
		var nav = elem.find('nav');
		var nav_list = nav.children('ul');
		var menu_items = nav_list.children('li');	

		this.toggleHideMenu = function(callBack)
		{
			if( elem.css('opacity') == '1' ){
				toggleNavAnim(function(){
					toggleMenuOpacity();
				});
			} else
			{
				toggleMenuOpacity(function(){
					toggleNavAnim();
				});
			}
			
		}
		var toggleMenuOpacity = function(callBack)
		{
			if( elem.css('opacity') == '1' ){
				elem.animate({
					'opacity' : '.2'
					},
					500,
					function() {
						if(typeof callBack == 'function'){
							callBack.call(this);
						}
					}
				);
			} else {
				elem.animate({
					'opacity' : '1'
					},
					500,
					function() {
						if(typeof callBack == 'function'){
							callBack.call(this);
						}
					}
				);
			}
		}
		var toggleNavAnim = function(callBack)
		{
			//Show Nav
			if( nav.css('display') =='none' ){
				elem.css( {'width' : 'auto'} );  //Shrinks the nav down to the logo
				elem.animate({
					'width': '100%' //animate nav to width of elem
					},
					1000, 
					function() { //Callback
						nav.show();
						menu_items.hide();
						menu_items.each(function(){
							var index = $(this).index();
							$(this).fadeIn(index * 500,function(){
								if(index === menu_items.length - 1)
								{
									if(typeof callBack == 'function'){
										callBack.call(this);
									}
								}
							});
						});
					}
				);
			} else {

				nav.hide();
				console.log(logo_anchor.outerWidth(true));
				elem.animate({
					'width' : logo_anchor.outerWidth(true) + 'px'
					},
					1000,
					function() { //Callback
						if(typeof callBack == 'function'){
							callBack.call(this);
						}
					}
				);
			}
			
		}
		var toggleMenuItemsAnim = function(callBack)
		{
			var marginTop, opacity, easing;
			if(menu_items.children('a:first').css('opacity') === "0" ){
				marginTop	= '0px';
				opacity		= 1;
				easing		= 'easeOutBack';
			} else {
				marginTop	= '60px';
				opacity		= 0;
				easing		= 'easeInBack';
			}
			menu_items.each(function(i) {
				var elem_anchor	= $(this).children('a:first')
				elem_anchor.stop().animate({
					marginTop	: marginTop,
					opacity		: opacity
				}, 200 + i * 200 , easing, function(){
					if(i === menu_items.length - 1)
					{
						if(typeof callBack == 'function'){
							callBack.call(this);
						}
					}
				});
			});
			
			
			
		}
		
		var toggleSubMenu = function(sm_elem, callBack){
			var top;
			if(!elem.hasClass('At-the-Top')){
				if(sm_elem.css('display')==='none'){
					top = (sm_elem.height() / 2 - elem.height() / 2) * -1;
				} else {
					top = 0;
				}
					sm_elem.animate({
						'height' : 'toggle',
						'top': top
						},
						400,
						function() {
							if(typeof callBack == 'function'){
								callBack.call(this);
							}
						}
					);
			} else {
				sm_elem.animate({
					'height' : 'toggle'
					},
					400,
					function() {
						if(typeof callBack == 'function'){
							callBack.call(this);
						}
					}
				);
			}
			
			
			
			
		}
		
		var toggleHeaderPos = function(callBack)
		{
			if(!elem.hasClass('At-the-Top')){
				elem.css({
					'top' : elem.offset().top + 'px'
				})
				elem.animate({
					'top':'20px'
					},
					700,
					function(){
						elem.addClass('At-the-Top');
						elem.css( {'position' : 'absolute'} );
						if(typeof callBack == 'function'){
							callBack.call(this);
						}
					});
			} else {
				if(typeof callBack == 'function'){
					callBack.call(this);
				}
			}
		}
		
		var loadPage = function(href, callBack)
		{
			$('#main').html('<img src="img/loader.gif" alt="Loading content, please wait"</p>').load(href + ' #main').hide().fadeIn(800);
			if(typeof callBack == 'function'){
				callBack.call(this);
			}
		}
		
		var _constructor = function()
		{
			nav.hide();
			//elem.hide();
			
			toggleNavAnim();
			
			//Bind click to Menu Items and submenu close icon
			menu_items.each(function(){
				var item = $(this);
				item.children('a').bind('click', function(){
					toggleMenuItemsAnim(function(){
						toggleSubMenu(item.children('.nav_submenu'));
					});
					return false;
				});
				
				item.find('.close_nav').bind('click', function(){
					toggleSubMenu(item.children('.nav_submenu'), function(){
						toggleMenuItemsAnim();
					});
					return false;
				});

				var subAnchors = item.find('ul li a');
				subAnchors.each(function(){
					var subAnchor = $(this);
					subAnchor.bind('click',function(){
						toggleMenuItemsAnim(function(){
							toggleSubMenu(item.children('.nav_submenu'), function(){
								toggleHeaderPos(function(){
									loadPage(subAnchor.attr('href'));
								});
							});
						});
						
						return false;
					});
				});

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
	$.fn.ce_menu = function()
	{
		return this.each(function()
		{
			var element = $(this);
			
			// Return early if this element already has a plugin instance
			if (element.data('ce_menu')) return;

			var ce_menu = new CE_Menu(this);
			
			// Store plugin object in this element's data
			element.data('ce_menu', ce_menu);
		});
	};
})(jQuery);