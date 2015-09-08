$(document).ready(function(){
  function initialize() {
  var myLatLng = new google.maps.LatLng(37.7873752, -122.4088985);
        var mapCanvas = document.getElementById('map');
        var mapOptions = {
          center: myLatLng ,
          zoom: 15,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(mapCanvas, mapOptions)
 var marker = new google.maps.Marker({
    position: myLatLng,
    map: map
  });
      }
  google.maps.event.addDomListener(window, 'load', initialize);

  var topoffset = 50;
  // Activate Scrollspy
  $('body').scrollspy({
    target: 'header .navbar',
    offset: topoffset
  });

//Use smooth scrolling when clicking on navigation
    $('.navbar a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') === 
        this.pathname.replace(/^\//,'') && 
        location.hostname === this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top-topoffset+2
          }, 500);
          return false;
        } //target.length
      } //click function
    }); //smooth scrolling


});