
(function() {
  "use strict";
  
  $('.nav__toggler').on('click', e =>  {
    e.preventDefault();
    $('body').toggleClass('menu-opened');
    $('.nav__toggler').toggleClass('active');
  })
  
  $('.nav__link').on('click', e => {
    $('body').removeClass('menu-opened');
    $('.nav__toggler').removeClass('active');
  })
  
  $('.menu__select').on('click', e => {
    $('.project__menu-mobile').toggleClass('active');
  })
  
  $('.menu__item').on('click', e => {
    $('.project__menu-mobile').removeClass('active');
    $('.menu__select').html($(e.target).text() + '<i class="fas fa-chevron-down"></i>');
  });
  
  $('.category__select').on('click', e => {
    $('.category').toggleClass('active');
  });
  
  $('.category__item').on('click', e => {
    $('.category__item').removeClass('active');
    $(e.target).addClass('active');
  })
  
  $('#slider').slick({
    arrows: false,
    dots: true,
    infinite: true,
    autoplay: true
    });
    
  })(jQuery);
  
  let map = null;
  
  function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      zoom: 8,
      center: new google.maps.LatLng(51.219987, 4.396237),
      disableDefaultUI: true
    });
  }
  
  google.maps.event.addDomListener(window, 'load', initMap);
  
  