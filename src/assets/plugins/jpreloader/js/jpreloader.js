/*
* jPreLoader - jQuery plugin
* Create a Loading Screen to preload images and content for you website
*
* Name:			jPreLoader.js
* Author:		Kenny Ooi - http://www.inwebson.com
* Date:			July 11, 2012		
* Version:		2.1
* Example:		http://www.inwebson.com/demo/jpreloader-v2/
*	
*/

(function($) {
	var items = new Array(),
		errors = new Array(),
		onComplete = function() {},
		current = 0;
	
	var jpreOptions = {
		splashVPos: '35%',
		loaderVPos: '75%',
		splashID: '#jpreContent',
		showSplash: true,
		showPercentage: true,
		autoClose: true,
		closeBtnText: 'Start!',
		onetimeLoad: false,
		debugMode: false,
		splashFunction: function() {}
	}
	
	//cookie
	var getCookie = function() {
		if( jpreOptions.onetimeLoad ) {
			var cookies = document.cookie.split('; ');
			for (var i = 0, parts; (parts = cookies[i] && cookies[i].split('=')); i++) {
				if ((parts.shift()) === "jpreLoader") {
					return (parts.join('='));
				}
			}
			return false;
		} else {
			return false;
		}
		
	}
	var setCookie = function(expires) {
		if( jpreOptions.onetimeLoad ) {
			var exdate = new Date();
			exdate.setDate( exdate.getDate() + expires );
			var c_value = ((expires==null) ? "" : "expires=" + exdate.toUTCString());
			document.cookie="jpreLoader=loaded; " + c_value;
		}
	}
	
	//create jpreLoader UI
	var createContainer = function() {
		
		jOverlay = $('<div></div>')
		.attr('id', 'jpreOverlay')
		.css({
			position: "fixed",
			top: 0,
			left: 0,
			width: '100%',
			height: '100%',
			zIndex: 9999999
		})
		.appendTo('body');
		
		if(jpreOptions.showSplash) {
			jContent = $('<div></div>')
			.attr('id', 'jpreSlide')
			.appendTo(jOverlay);
			
			var conWidth = $(window).width() - $(jContent).width();
			$(jContent).css({
				position: "absolute",
				top: jpreOptions.splashVPos,
				left: Math.round((50 / $(window).width()) * conWidth) + '%'
			});
			$(jContent).html($(jpreOptions.splashID).wrap('<div/>').parent().html());
			$(jpreOptions.splashID).remove();
			jpreOptions.splashFunction()			
		}
		
		jLoader = $('<div></div>')
		.attr('id', 'jpreLoader')
		.appendTo(jOverlay);
		
		var posWidth = $(window).width() - $(jLoader).width();
		$(jLoader).css({
			position: 'absolute',
			top: jpreOptions.loaderVPos,
			left: Math.round((50 / $(window).width()) * posWidth) + '%'
		});
		
		jBar = $('<div></div>')
		.attr('id', 'jpreBar')
		.css({
			width: '0%',
			height: '100%'
		})
		.appendTo(jLoader);
		
		if(jpreOptions.showPercentage) {
			jPer = $('<div></div>')
			.attr('id', 'jprePercentage')
			.css({
				position: 'relative',
				height: '100%'
			})
			.appendTo(jLoader)
			.html('Loading...');
		}
		if( !jpreOptions.autoclose ) {
			jButton = $('<div></div>')
			.attr('id', 'jpreButton')
			.on('click', function() {
				loadComplete();
			})
			.css({
				position: 'relative',
				height: '100%'
			})
			.appendTo(jLoader)
			.text(jpreOptions.closeBtnText)
			.hide();
		}
	}
	
	//get all images from css and <img> tag
	var getImages = function(element) {
		$(element).find('*:not(script)').each(function() {
			var url = "";

			if ($(this).css('background-image').indexOf('none') == -1 && $(this).css('background-image').indexOf('-gradient') == -1) {
				url = $(this).css('background-image');
				if(url.indexOf('url') != -1) {
					var temp = url.match(/url\((.*?)\)/);
					url = temp[1].replace(/\"/g, '');
				}
			} else if ($(this).get(0).nodeName.toLowerCase() == 'img' && typeof($(this).attr('src')) != 'undefined') {
				url = $(this).attr('src');
			}
			
			if (url.length > 0) {
				items.push(url);
			}
		});
	}
	
	//create preloaded image
	var preloading = function() {
                if (!items.length) completeLoading();
		for (var i = 0; i < items.length; i++) {
			if(loadImg(items[i]));
		}
	}
	var loadImg = function(url) {
		var imgLoad = new Image();
		$(imgLoad)
		.load(function() {
			completeLoading();
		})
		.error(function() {
			errors.push($(this).attr('src'));
			completeLoading();
		})
		.attr('src', url);
	}
	
	//update progress bar once image loaded
	var completeLoading = function() {
		current++;

		var per = Math.round((current / items.length) * 100);
		$(jBar).stop().animate({
			width: per + '%'
		}, 500, 'linear');
		
		if(jpreOptions.showPercentage) {
			$(jPer).text(per+"%");
		}
		
		//if all images loaded
		if(current >= items.length) {
			current = items.length;
			setCookie();	//create cookie
			
			if(jpreOptions.showPercentage) {
				$(jPer).text("100%");
			}
			
			//fire debug mode
			if (jpreOptions.debugMode) {
				var error = debug();
			}
			
			
			//max progress bar
			$(jBar).stop().animate({
				width: '100%'
			}, 500, 'linear', function() {
				//autoclose on
				if( jpreOptions.autoClose )
					loadComplete();
				else
					$(jButton).fadeIn(1000);
			});	
		}	
	}
	
	//triggered when all images are loaded
	var loadComplete = function() {
		$(jOverlay).fadeOut(800, function() {
			$(jOverlay).remove();
			onComplete();	//callback function
		});
	}
	
	//debug mode
	var debug = function() {
		if(errors.length > 0) {
			var str = 'ERROR - IMAGE FILES MISSING!!!\n\r'
			str	+= errors.length + ' image files cound not be found. \n\r';	
			str += 'Please check your image paths and filenames:\n\r';
			for (var i = 0; i < errors.length; i++) {
				str += '- ' + errors[i] + '\n\r';
			}
			return true;
		} else {
			return false;
		}
	}
	
	$.fn.jpreLoader = function(options, callback) {
        if(options) {
            $.extend(jpreOptions, options );
        }
		if(typeof callback == 'function') {
			onComplete = callback;
		}
		
		//show preloader once JS loaded
		$('body').css({
			'display': 'block'
		});
		
		return this.each(function() {
			if( !(getCookie()) ) {
				createContainer();
				getImages(this);
				preloading();
			}
			else {	//onetime load / cookie is set
				$(jpreOptions.splashID).remove();
				onComplete();
			}
		});
    };

})(jQuery);