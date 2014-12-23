$(window).load(function(){

   // PAGE IS FULLY LOADED  
   // FADE OUT YOUR OVERLAYING DIV
   $('#loading-overlay').fadeOut(100);
   $('#confirmation-overlay').fadeIn(100);
});

// // Disable main page scrolling while landing page is visible

// $(document).ready
// (function() {
//     if (!$("#confirmation-overlay").is(':visible')&&!$("#loading-overlay").is(':visible')&&!$("#road-ahead-overlay").is(':visible')) {
//         $("body").toggleClass("noScroll");
//     }
// });

// On age confirmation, hide landing page, animate bottle cap and enable main
// page scrolling

$(document).ready
$('#checkbox-yes').click(function() {
    $('#bottle-cap').toggleClass("rotate");
    $('#confirmation-overlay').delay(1000).fadeOut(500);
    $('#main').toggleClass("invisible");
    $("body").toggleClass("noScroll");
});

// On age confirmation, hide landing page, animate bottle cap and enable main
// page scrolling

$(document).ready
$('#checkbox-no').click(function() {
    $('#road-ahead-overlay').toggle();
    $('#confirmation-overlay').delay(500).fadeOut(500);
});

/* Google Maps background */

$(document).ready

(function() {
    
    var isDraggable = $(document).width() > 480 ? true : false; // If document (your website) is wider than 480px, isDraggable = true, else isDraggable = false

    var mapOptions = {
        zoom: 14,
        scrollwheel: false,
        draggable: isDraggable,
        disableDefaultUI: true,
        center: new google.maps.LatLng(48.42, - 123.34),
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        mapTypeControl: true,
    mapTypeControlOptions: {
        style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
        position: google.maps.ControlPosition.BOTTOM_LEFT
    },
    panControl: false,
    panControlOptions: {
        position: google.maps.ControlPosition.BOTTOM_LEFT
    },
    zoomControl: true,
    zoomControlOptions: {
        style: google.maps.ZoomControlStyle.LARGE,
        position: google.maps.ControlPosition.LEFT_CENTER
    },
    scaleControl: true,
    streetViewControl: false,
    streetViewControlOptions: {
        position: google.maps.ControlPosition.BOTTOM_RIGHT
    },
        styles: [{"featureType":"administrative","stylers":[{"visibility":"off"}]},{"featureType":"poi","stylers":[{"visibility":"simplified"}]},{"featureType":"road","stylers":[{"visibility":"simplified"}]},{"featureType":"water","stylers":[{"visibility":"simplified"}]},{"featureType":"transit","stylers":[{"visibility":"simplified"}]},{"featureType":"landscape","stylers":[{"visibility":"simplified"}]},{"featureType":"road.highway","stylers":[{"visibility":"off"}]},{"featureType":"road.local","stylers":[{"visibility":"on"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"visibility":"on"}]},{"featureType":"water","stylers":[{"color":"#84afa3"},{"lightness":52}]},{"stylers":[{"saturation":-77}]},{"featureType":"road"}]
    };
    var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

    


});

