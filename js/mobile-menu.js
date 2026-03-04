/**
 * Aggressive Mobile Menu for Royal Ivory Hotel
 * Completely overrides sf-menu on mobile devices
 * Version: 3.0 - Nuclear Option
 */
$(document).ready(function() {
    
    var mobileBreakpoint = 768;
    var isMenuOpen = false;
    
    function isMobile() {
        return $(window).width() <= mobileBreakpoint;
    }
    
    // Create mobile menu button if it doesn't exist
    function createMobileButton() {
        if (!$('#mobile-menu-btn').length) {
            var btn = `
                <div id="mobile-menu-btn" style="
                    position: fixed !important;
                    top: 15px !important;
                    right: 15px !important;
                    z-index: 99999 !important;
                    width: 50px !important;
                    height: 50px !important;
                    background: #333 !important;
                    cursor: pointer !important;
                    border-radius: 5px !important;
                    display: none !important;
                    flex-direction: column !important;
                    justify-content: center !important;
                    align-items: center !important;
                    box-shadow: 0 2px 10px rgba(0,0,0,0.3) !important;
                ">
                    <span style="
                        display: block !important;
                        width: 25px !important;
                        height: 2px !important;
                        background: white !important;
                        margin: 3px 0 !important;
                        transition: 0.3s !important;
                    "></span>
                    <span style="
                        display: block !important;
                        width: 25px !important;
                        height: 2px !important;
                        background: white !important;
                        margin: 3px 0 !important;
                        transition: 0.3s !important;
                    "></span>
                    <span style="
                        display: block !important;
                        width: 25px !important;
                        height: 2px !important;
                        background: white !important;
                        margin: 3px 0 !important;
                        transition: 0.3s !important;
                    "></span>
                </div>
            `;
            $('body').prepend(btn);
        }
    }
    
    // Create mobile menu container
    function createMobileMenu() {
        if (!$('#mobile-menu-container').length) {
            var container = `
                <div id="mobile-menu-overlay" style="
                    position: fixed !important;
                    top: 0 !important;
                    left: 0 !important;
                    width: 100% !important;
                    height: 100% !important;
                    background: rgba(0,0,0,0.7) !important;
                    z-index: 99997 !important;
                    display: none !important;
                "></div>
                <div id="mobile-menu-container" style="
                    position: fixed !important;
                    top: 0 !important;
                    right: -300px !important;
                    width: 280px !important;
                    height: 100% !important;
                    background: white !important;
                    z-index: 99998 !important;
                    transition: right 0.3s ease !important;
                    overflow-y: auto !important;
                    padding-top: 80px !important;
                ">
                    <ul id="mobile-menu-list" style="
                        list-style: none !important;
                        padding: 0 !important;
                        margin: 0 !important;
                    "></ul>
                </div>
            `;
            $('body').append(container);
        }
    }
    
    // Copy menu items from original menu to mobile menu
    function populateMobileMenu() {
        var mobileList = $('#mobile-menu-list');
        mobileList.empty();
        
        $('#main-nav > li').each(function() {
            var $originalLi = $(this);
            var $link = $originalLi.children('a').first();
            var $submenu = $originalLi.children('ul').first();
            
            // Create mobile menu item
            var mobileItem = $(`
                <li style="
                    border-bottom: 1px solid #eee !important;
                    position: relative !important;
                ">
                    <a href="${$link.attr('href') || '#'}" style="
                        display: block !important;
                        padding: 15px 20px !important;
                        color: #333 !important;
                        text-decoration: none !important;
                        font-size: 16px !important;
                        border: none !important;
                        background: none !important;
                        font-weight: normal !important;
                    ">${$link.text()}</a>
                </li>
            `);
            
            // If there's a submenu, add it
            if ($submenu.length > 0) {
                var submenuHtml = '<ul style="display: none !important; background: #f8f8f8 !important; list-style: none !important; padding: 0 !important; margin: 0 !important;">';
                
                $submenu.children('li').each(function() {
                    var $subLink = $(this).children('a').first();
                    submenuHtml += `
                        <li style="border-bottom: 1px solid #e0e0e0 !important;">
                            <a href="${$subLink.attr('href') || '#'}" style="
                                display: block !important;
                                padding: 12px 40px !important;
                                color: #666 !important;
                                text-decoration: none !important;
                                font-size: 14px !important;
                                border: none !important;
                                background: none !important;
                            ">${$subLink.text()}</a>
                        </li>
                    `;
                });
                submenuHtml += '</ul>';
                
                // Add arrow indicator and submenu
                mobileItem.find('a').append(`
                    <span style="
                        position: absolute !important;
                        right: 20px !important;
                        top: 50% !important;
                        transform: translateY(-50%) !important;
                        width: 0 !important;
                        height: 0 !important;
                        border-left: 5px solid #999 !important;
                        border-top: 4px solid transparent !important;
                        border-bottom: 4px solid transparent !important;
                        transition: transform 0.3s !important;
                    "></span>
                `);
                mobileItem.append(submenuHtml);
                mobileItem.addClass('has-submenu');
            }
            
            mobileList.append(mobileItem);
        });
    }
    
    // Handle mobile menu toggle
    function toggleMobileMenu() {
        var container = $('#mobile-menu-container');
        var overlay = $('#mobile-menu-overlay');
        var btn = $('#mobile-menu-btn');
        
        if (isMenuOpen) {
            // Close menu
            container.css('right', '-300px');
            overlay.fadeOut(300);
            btn.removeClass('active');
            isMenuOpen = false;
        } else {
            // Open menu
            container.css('right', '0');
            overlay.fadeIn(300);
            btn.addClass('active');
            isMenuOpen = true;
        }
    }
    
    // Handle submenu toggle
    function toggleSubmenu($item) {
        var $submenu = $item.find('ul');
        var $arrow = $item.find('span');
        
        if ($item.hasClass('submenu-open')) {
            $submenu.slideUp(200);
            $arrow.css('transform', 'translateY(-50%)');
            $item.removeClass('submenu-open');
        } else {
            // Close other submenus
            $('.submenu-open').removeClass('submenu-open').find('ul').slideUp(200);
            $('.submenu-open span').css('transform', 'translateY(-50%)');
            
            // Open this submenu
            $submenu.slideDown(200);
            $arrow.css('transform', 'translateY(-50%) rotate(90deg)');
            $item.addClass('submenu-open');
        }
    }
    
    // Show/hide mobile elements
    function handleScreenSize() {
        if (isMobile()) {
            $('#mobile-menu-btn').css('display', 'flex');
            // Hide original navigation completely on mobile
            $('nav').hide();
            populateMobileMenu();
        } else {
            $('#mobile-menu-btn').hide();
            $('#mobile-menu-overlay').hide();
            $('#mobile-menu-container').css('right', '-300px');
            $('nav').show();
            isMenuOpen = false;
        }
    }
    
    // Initialize
    createMobileButton();
    createMobileMenu();
    handleScreenSize();
    
    // Event handlers
    $(document).on('click', '#mobile-menu-btn', function() {
        toggleMobileMenu();
    });
    
    $(document).on('click', '#mobile-menu-overlay', function() {
        toggleMobileMenu();
    });
    
    // Handle submenu clicks
    $(document).on('click', '#mobile-menu-list .has-submenu > a', function(e) {
        e.preventDefault();
        toggleSubmenu($(this).parent());
    });
    
    // Handle regular menu item clicks (without submenus)
    $(document).on('click', '#mobile-menu-list li:not(.has-submenu) a', function() {
        // Close menu when clicking a regular link
        toggleMobileMenu();
    });
    
    // Handle window resize
    $(window).resize(function() {
        handleScreenSize();
    });
    
    // Add active state CSS for button
    var buttonCSS = `
        <style>
        #mobile-menu-btn.active span:nth-child(1) {
            transform: rotate(45deg) translate(5px, 5px) !important;
        }
        #mobile-menu-btn.active span:nth-child(2) {
            opacity: 0 !important;
        }
        #mobile-menu-btn.active span:nth-child(3) {
            transform: rotate(-45deg) translate(7px, -6px) !important;
        }
        
        #mobile-menu-list a:hover {
            background: #f0f0f0 !important;
            color: #8B4513 !important;
        }
        </style>
    `;
    
    if (!$('#mobile-btn-css').length) {
        $('head').append(buttonCSS);
    }
    
    console.log('Aggressive Mobile Menu Loaded Successfully');
});
