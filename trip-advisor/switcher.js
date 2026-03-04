// using "jQuery" here instead of the dollar sign will protect against conflicts with other libraries like MooTools
jQuery(document).ready(function () {

    //Set default Jacked ease
	jQuery.easing.def = "easeOutExpo";
    jQuery.styleSwitcher();
	

});

// plugin structure used so we can use the "$" sign safely
(function ($) {

    //main vars
    var switcher,
    browser,
    isMobile,
    isIE8,
    themecss;


    // class constructor / "init" function
    $.styleSwitcher = function () {

        browser = Jacked.getBrowser();
        isMobile = (Jacked.getMobile() == null) ? false : true;
        isIE8 = Jacked.getIE();

        //container
        switcher = $('.styleSwitcherWrapper');
        
		if(isMobile){
			switcher.remove();
		}
		else{
			
            themecss = $('#colorTheme');
			initSwitcher();
			initToggle();
		}



    }


    /////////////////////////////////////////////////////////////////////////////////////////////////////////
    //INITIATE STYLE SWITCHER
    /////////////////////////////////////////////////////////////////////////////////////////////////////////
    function initSwitcher() {


        //colors
        switcher.find('.styleSwitcherColors a').each(function () {

            var t = $(this);

            var c = t.attr('href').split('?theme=')[1];
            var css = "css/colors/" + c + "Theme.css";

            t.click(function (e) {
							  
                e.preventDefault();
				
				var target = $(this);
                var img = target.find('img');

                if (!img.hasClass('selected')) {
					
					//remove selected
					switcher.find('ul').not('.styleSwitcherLayout').find('li img').each(function () {
						 $(this).removeClass('selected');								   
					});
                    
					img.addClass('selected');
                    themecss.attr("href", css);
                    return false;
                }



            });


        });

        //layout
        var hb = $('body').find('.headerBg');
		var hcb = $('body').find('.headerContentBg');
        var cb = $('body').find('.contentBgFull');
        var fb = $('body').find('.footerBgFull');
        var sfb = $('body').find('.subFooterBgFull');

        switcher.find('.styleSwitcherLayout a').each(function () {

            var t = $(this);
			var img = t.find('img');
			
            t.click(function () {
                
				if (!img.hasClass('selected')) {
					
					switcher.find('.styleSwitcherLayout li img').each(function () {
						 $(this).removeClass('selected');								   
					});
					
					
					var btn = $(this);
					img.addClass('selected');
					var l = btn.attr('href').split('?theme=')[1];
	
					if (l == 'boxed') {
						hb.removeClass('headerBg');
						cb.css('visibility', 'hidden');
						fb.removeClass('footerBgFull');
						sfb.removeClass('subFooterBgFull');
						hcb.css('visibility', 'hidden');
					} else {
						hb.addClass('headerBg');
						cb.css('visibility', 'visible');
						fb.addClass('footerBgFull');
						sfb.addClass('subFooterBgFull');
						hcb.css('visibility', 'visible');
					}
	
					return false;
				}

            });


        });

        //layout
        var ns = $('body').find('#noslider');

        switcher.find('.styleSwitcherHeader a').each(function () {

            var t = $(this);


            t.click(function () {

                var btn = $(this);
                var l = btn.attr('href').split('?theme=')[1];

                if (l == 'blur') {
                    ns.attr('data-layout', 'blur');
                    pageLayoutType = 'blur';
                } else if (l == 'image') {
                    ns.attr('data-layout', 'image');
                    pageLayoutType = 'image';
                } else {
                    ns.attr('data-layout', '#aaa');
                    pageLayoutType = '#aaa';
                }

                sortPageHeaderStyle();

                return false;

            });


        });


    }

    function initToggle() {

        switcher.delay(1000).animate({
				bottom: 0
			  }, 500);

        var switcherOpen = true;
        var btn = $('.styleSwitcherToggle');
        var w = switcher.outerHeight();

        btn.click(function (e) {
							
			e.preventDefault();

			switcher.animate({
				bottom: switcherOpen ? -w : 0
			  }, 500);
			
            switcherOpen = !switcherOpen;

        });

    }





})(jQuery);