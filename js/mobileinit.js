/*
OpenCruise - Copyright (C) 2016 James C. Rivard
Licensed under the GNU Public License Version 3:
http://www.gnu.org/copyleft/gpl.html
*/
define(['jquery'], function ($) {
    $(document).bind("mobileinit", function(){
        $.mobile.buttonMarkup.hoverDelay = 0;
        $.mobile.defaultPageTransition = "none";
        $.mobile.defaultDialogTransition = "none";
        $.mobile.autoInitializePage = false;
        if (window.location.protocol === "file:" ) {
            $.mobile.changePage.defaults.changeHash = false; //needed to load site from file URL
            $.mobile.hashListeningEnabled = false; //needed to load site from file URL
            $.mobile.pushStateEnabled = false; //needed to load site from file URL
        }
        //$.mobile.selectmenu.prototype.options.nativeMenu = false;
    });
});